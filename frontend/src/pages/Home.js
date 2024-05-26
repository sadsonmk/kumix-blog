import { useEffect } from 'react'
import { useBlogsContext } from '../hooks/useBlogsContext'
import BlogDetails from '../components/BlogDetails'
import HeroSection from '../components/HeroSection'

const Home = () => {
    const {blogs, dispatch} = useBlogsContext()
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/blogs')
            const data = await res.json()
            if (res.ok) {
                dispatch({ type: 'SET_BLOGS', payload: data})
            }
        }
        fetchBlogs()
    }, [dispatch])
  return (
    <div className='home'>
        <HeroSection />
        <div className='blogs'>
            {blogs && blogs.map(blog => (
                <BlogDetails key={blog._id} blog={blog} showDeleteButton={false}/>
            ))}
        </div>
    </div>
  )
}

export default Home