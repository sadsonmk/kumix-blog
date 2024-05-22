import React from 'react'

const BlogDetails = ({blog}) => {
  return (
    <div className='blog-details'>
        <h3>{blog.title}</h3>
        <p><strong>tip: </strong>{blog.content}</p>
        <p><strong>author: </strong>{blog.author}</p>
        <p>{blog.createdAt}</p>
    </div>
  )
}

export default BlogDetails