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
import { Link } from 'react-router-dom'
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns'

const BlogDetails = ({ blog }) => {

  const createdAt = new Date(blog.createdAt)
  const daysAgo = differenceInDays(new Date(), createdAt)
  const hoursAgo = differenceInHours(new Date(), createdAt)
  const minutesAgo = differenceInMinutes(new Date(), createdAt)

  return (
    <div className='blog-details'>
    <MDBCard alignment='center'>
      <MDBCardHeader>Facts and Opinions</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{blog.title}</MDBCardTitle>
        <MDBCardText>{blog.content.substring(0, 50)}...</MDBCardText>
        <MDBCardSubTitle>author: {blog.author}</MDBCardSubTitle>
        {/* {showDeleteButton && user && <MDBBtn onClick={handleClick}>delete</MDBBtn>} */}
        <Link to={`/blog/${blog._id}`}>
          <MDBBtn>Read more...</MDBBtn>
        </Link>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>
      {minutesAgo < 60 ? `${minutesAgo} minutes ago` :
     hoursAgo < 24 ? `${hoursAgo} hours ago` :
     `${daysAgo} days ago`}
      </MDBCardFooter>
    </MDBCard>
    </div>
  )
}

export default BlogDetails