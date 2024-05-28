import React from 'react';
import './About.css';
import { Container, Card } from 'react-bootstrap';

const About = () => {

      return (
        <Container className="about">

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

          <Card className="team-member">
            <Card.Img variant="top" src="team-member-1.jpg" />
              <Card.Body>
                <Card.Title>Team Member 1</Card.Title>
                <Card.Text>Sadson Mkumira</Card.Text>
              </Card.Body>
          </Card>
      </Container>
      );
    }



export default About;