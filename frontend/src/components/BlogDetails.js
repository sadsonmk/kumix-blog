
import { useBlogsContext } from '../hooks/useBlogsContext'

const BlogDetails = ({ blog }) => {
  const { dispatch } = useBlogsContext()

  const handleClick = async () => {

    const res = await fetch('/blogs/' + blog._id, {
      method: 'DELETE'
    })
    const data = await res.json()
    if (res.ok) {
      dispatch({ type: 'DELETE_BLOG', payload: data })
    }
  }


  return (
    <div className='blog-details'>
        <h3>{blog.title}</h3>
        <p><strong>tip: </strong>{blog.content}</p>
        <p><strong>author: </strong>{blog.author}</p>
        <p>{blog.createdAt}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default BlogDetails