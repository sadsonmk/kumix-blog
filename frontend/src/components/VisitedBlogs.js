import React from 'react';
import { Link } from 'react-router-dom';


const VisitedBlogs = ({ visitedBlogs }) => {
  return (
    <div className='visited-blogs'>
      <h2>Visited Blogs</h2>
      {visitedBlogs.map(blog => (
        <div key={blog._id}>
         <p className='blog-visited'><Link to={`/blog/${blog._id}`}>{blog.title}</Link></p>
        </div>
      ))}
    </div>
  );
};

export default VisitedBlogs;