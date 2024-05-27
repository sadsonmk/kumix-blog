import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const VisitedBlogs = ({ visitedBlogs }) => {
  return (


      <div className='visited-blogs'>
       <Button variant="outline-primary">Visited Blogs</Button>{' '}
      {visitedBlogs.map(blog => (
        <div key={blog._id} >
         <p className='blog-visited'><Link to={`/blog/${blog._id}`}>{blog.title}</Link></p>
        </div>
      ))}
    </div>

  );
};

export default VisitedBlogs;