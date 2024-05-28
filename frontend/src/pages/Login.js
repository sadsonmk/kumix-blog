import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, loading } = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }

  return (
    <div className="cont">
  <form className='create' onSubmit={handleSubmit}>
    <div className="row">
        <h3>Login</h3>
      <div className="col-25">
        <label>Email</label>
      </div>
      <div className="col-75">
        <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label>Password</label>
      </div>
      <div className="col-75">
        <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
      </div>
    </div>
    <div className="row">
      <input type="submit" value="Login" disabled={loading} />
      <Link to="/signup">Don't have an account? Sign up</Link>
    </div>
    {error && <div className="alert">
    <span className="closebtn" onClick={(e) => e.target.parentElement.style.display='none'}>&times;</span>
  <strong>{error}</strong> </div>}
  </form>
</div>
  )
}

export default Login