import { useState } from "react";
//import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    //const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const navigate = useNavigate()

    const signup = async (email, password) => {
        setLoading(true);
        setError(null);

        const res = await fetch('/user/signup', {
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
            //dispatch({ type: 'LOGIN', payload: json });
            setLoading(false);
            alert('Signup successful')
            navigate('/login')
        }
    }
    return { signup, error, loading }
}