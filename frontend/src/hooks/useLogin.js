import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const navigate = useNavigate()

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        const res = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await res.json();
        if (!res.ok) {
            setError(json.error);
            setLoading(false);
            return;
        }
        if (res.ok) {
            // Save the user in localStorage
            localStorage.setItem('user', JSON.stringify(json));
            // update user in the AuthContext
            dispatch({ type: 'LOGIN', payload: json });
            setLoading(false);
            navigate('/')
        }
    }
    return { login, error, loading }
}