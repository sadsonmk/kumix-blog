import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

import { useBlogsContext } from '../hooks/useBlogsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const BlogDetails = ({ blog, showDeleteButton }) => {
  const { dispatch } = useBlogsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {

    const res = await fetch('/blogs/' + blog._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const data = await res.json()
    if (res.ok) {
      dispatch({ type: 'DELETE_BLOG', payload: data })
    }
  }


  return (
    // <div className='blog-details'>
    //     <h3>{blog.title}</h3>
    //     <p><strong>tip: </strong>{blog.content}</p>
    //     <p><strong>author: </strong>{blog.author}</p>
    //     <p>{blog.createdAt}</p>
    //     <span onClick={handleClick}>delete</span>
    // </div>
    <div className='blog-details'>
    <MDBCard alignment='center'>
      <MDBCardHeader>Tip</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{blog.title}</MDBCardTitle>
        <MDBCardText>{blog.content}</MDBCardText>
        <MDBCardSubTitle>author: {blog.author}</MDBCardSubTitle>
        {showDeleteButton && user && <MDBBtn onClick={handleClick}>delete</MDBBtn>}
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
    </MDBCard>
    </div>
  )
}

export default BlogDetails