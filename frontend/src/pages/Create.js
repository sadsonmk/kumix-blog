import { useEffect, useState } from 'react'
import './Create.css'
import { useBlogsContext } from '../hooks/useBlogsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const { user } = useAuthContext()
    const { dispatch } = useBlogsContext()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleSubmitBlog = async (ev) => {
        ev.preventDefault()

        if (!user) {
            setError('You must be logged in to create a blog')
            return
        }

        const blog = { title, author, content }
        const response = await fetch('/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setAuthor('')
            setContent('')
            setError(null)
            console.log('Blog added successfully', json)
            dispatch({ type: 'CREATE_BLOG', payload: json })
        }

    }

  return (
    <div className="cont">
  <form className='create' onSubmit={handleSubmitBlog}>
    <div className="row">
      <div className="col-25">
        <label>Title</label>
      </div>
      <div className="col-75">
        <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label>author</label>
      </div>
      <div className="col-75">
        <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        />
      </div>
    </div>

    <div className="row">
      <div className="col-25">
        <label>Content</label>
      </div>
      <div className="col-75">
        <textarea
        placeholder="Write something.."
        style={{height: '200px'}}
        onChange={(e) => setContent(e.target.value)}
        value={content}
        >
        </textarea>
      </div>
    </div>
    <div className="row">
    <input type="submit" value="Submit" />
    </div>

    {error && <div className="alert">
    <span className="closebtn" onClick={(e) => e.target.parentElement.style.display='none'}>&times;</span>
  <strong>{error}</strong> </div>}
  </form>
</div>
  )
}

export default Create