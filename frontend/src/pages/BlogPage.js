import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogsContext } from '../hooks/useBlogsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { dispatch } = useBlogsContext()
  const { user } = useAuthContext()
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const updateVisitedBlogs = (id) => {
    let visitedBlogs = JSON.parse(localStorage.getItem('visitedBlogs')) || [];
    if (!visitedBlogs.includes(id)) {
      visitedBlogs.push(id);
      localStorage.setItem('visitedBlogs', JSON.stringify(visitedBlogs));
    }
  }
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/blogs/${id}`);
      const data = await response.json();
      setBlog(data);
      updateVisitedBlogs(id);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const handleClick = async () => {
    if (showModal) {
      const res = await fetch(`/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      const data = await res.json()
      if (res.ok) {
        dispatch({ type: 'DELETE_BLOG', payload: data })
        navigate('/')
      }
    }
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      {/* <p>{blog.content}</p> */}
      {blog.content.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
      ))}
      {user &&
      <>
      <button onClick={handleShowModal}>Delete the Blog</button>
      <Link to={`/update/${id}`}><button>Edit the Blog</button></Link>
      </>
      }

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this blog?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default BlogPage;