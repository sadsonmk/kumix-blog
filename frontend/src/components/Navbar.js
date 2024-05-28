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
                <h3>Kumix blogs®</h3>
            </Link>
            <nav >
                <ul className='nav-links'>
                    { user && (
                    <>
                        <span>Welcome {user.email}</span>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/create'>Create-blog</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/myblogs'>My-Blogs</Link>
                        </li>
                        <li>
                        <button onClick={handleClick}>Log-out</button>
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
                            <Link to='/signup'>Sign-up</Link>
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