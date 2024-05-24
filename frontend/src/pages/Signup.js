import { useState } from 'react'
import './Create.css'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, loading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)

    }

  return (
    <div className="cont">
  <form className='create' onSubmit={handleSubmit}>
    <div className="row">
        <h3>Sign Up</h3>
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
      <input type="submit" value="Sign Up" disabled={loading}/>
    </div>
    {error && <div className="alert">
    <span className="closebtn" onClick={(e) => e.target.parentElement.style.display='none'}>&times;</span>
  <strong>{error}</strong> </div>}
  </form>
</div>
  )
}

export default Signup