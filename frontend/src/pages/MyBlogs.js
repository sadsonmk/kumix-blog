import { useBlogsContext } from '../hooks/useBlogsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import BlogDetails from '../components/BlogDetails'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('user')
const MyBlogs = () => {
    const {blogs, dispatch} = useBlogsContext()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/blogs')
            const data = await res.json()
            if (res.ok) {
                dispatch({ type: 'SET_BLOGS', payload: data})
            }
        }
    if (JSON.parse(token)) {
        fetchBlogs()
    } else {
        navigate('/login')
    }


    }, [user, dispatch, navigate])

    const displayedBlogs = user ? blogs.filter(blog => blog.userId === user.id) : []
    console.log(displayedBlogs)
    return (
        <div className='home'>

            <div className='blogs'>
                {displayedBlogs && displayedBlogs.map(blog => (
                    <BlogDetails key={blog._id} blog={blog} showDeleteButton={true}/>
                ))}
            </div>
        </div>
    )
}

export default MyBlogs