import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const HeroSection = () => {
  const { user } = useAuthContext();

  return (

    <div className='hero-section'>

     <h1>Welcome to the Developer Publishing Blog</h1>
      <p>Enjoy Publishing your experiences...</p>
      {user ? <Link to='/create'>
      <button className='get-started' style={{ verticalAlign: 'middle'}} ><span>Get Started</span></button>
      </Link> : <Link to='/signup'> <button className='get-started' style={{ verticalAlign: 'middle'}} ><span>Get Started</span></button></Link>}

    </div>

  );
};

export default HeroSection;


