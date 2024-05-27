import { useBlogsContext } from '../hooks/useBlogsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import BlogDetails from '../components/BlogDetails'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';


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
            <h3 className='blog-heading'>My Blogs</h3>
            <div className='blogs'>
                {displayedBlogs && displayedBlogs.map(blog => (
                    <BlogDetails key={blog._id} blog={blog} />
                ))}
            </div>
                <span className='space'></span>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>My thoughts</Accordion.Header>
                    <Accordion.Body>
                        Welcome to our blog! We are a group of passionate individuals who love to share our thoughts and ideas with the world about Software Engineering, Computer Science and related fields.

                        Our mission is to inspire, educate, and engage our readers through real world experiences. We care about technology and how it can change the world for the better. We believe that sharing knowledge is the best way to make a difference.
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        </div>
    )
}

export default MyBlogs