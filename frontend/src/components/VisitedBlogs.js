import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const VisitedBlogs = ({ visitedBlogs }) => {
  return (

    <Container>
      <Row>
      {/* <div className='visited-blogs'> */}
      <h3>Visited Blogs</h3>
      {visitedBlogs.map(blog => (
        <div key={blog._id} >
         <Col><p className='blog-visited'><Link to={`/blog/${blog._id}`}>{blog.title}</Link></p></Col>
        </div>
      ))}
    {/* </div> */}
      </Row>
    </Container>

  );
};

export default VisitedBlogs;