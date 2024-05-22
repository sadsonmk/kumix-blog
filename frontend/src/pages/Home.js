import { useEffect, useState } from 'react'
import BlogDetails from '../components/BlogDetails'
import HeroSection from '../components/HeroSection'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/blogs')
            const data = await res.json()
            if (res.ok) {
                setBlogs(data)
            }
        }
        fetchBlogs()
    }, [])
  return (
    <div className='home'>
        <HeroSection />
        <div className='blogs'>
            {blogs && blogs.map(blog => (
                <BlogDetails key={blog._id} blog={blog}/>
            ))}
        </div>
    </div>
  )
}

export default Home