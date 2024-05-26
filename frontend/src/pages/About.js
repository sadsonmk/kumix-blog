import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to our blog! We are a group of passionate individuals who love to share our thoughts and ideas with the world about Software Engineering, Computer Science and related fields.
      </p>
      <p>
        Our mission is to inspire, educate, and engage our readers through real world experiences. We care about technology and how it can change the world for the better. We believe that sharing knowledge is the best way to make a difference.
      </p>
      <p>
        Share your thoughts, experiences, moments with others. If you have any questions or comments, please don't hesitate to get in touch.
      </p>
      <h2>Our Team</h2>
      <div className="team">
        <div className="team-member">
          <img src="team-member-1.jpg" alt="Team Member 1" />
          <h3>Team Member 1</h3>
          <p>Sadson Mkumira </p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default About;