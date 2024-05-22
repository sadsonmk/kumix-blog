import React from 'react';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <h1>Welcome to the Developer Publishing Blog</h1>
      <p>Enjoy Publishing your experiences...</p>
      <button className='get-started' style={{ verticalAlign: 'middle'}} ><span>Get Started</span></button>
    </div>
  );
};

export default HeroSection;