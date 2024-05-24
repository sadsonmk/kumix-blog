import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
  return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h1>Kumix blogs</h1>
            </Link>
            <nav>
                <ul>
                    { user && (
                    <>
                        <span>Welcome {user.email}</span>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/create'>Create</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                        <button onClick={handleClick}>Log out</button>
                        </li>
                    </>
                    )}
                    {!user && (
                    <>
                         <li>
                            <Link to='/'>Home</Link>
                        </li>

                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Sign up</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>

                     </>
                    )}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar