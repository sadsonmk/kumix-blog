import { useEffect, useState } from 'react'
import { useBlogsContext } from '../hooks/useBlogsContext'
import BlogDetails from '../components/BlogDetails'
import HeroSection from '../components/HeroSection'
import VisitedBlogs from '../components/VisitedBlogs';
import TestimonialSlider from '../components/TestimonialSlider';


const Home = () => {
    const {blogs, dispatch} = useBlogsContext()
    const [visitedBlogs, setVisitedBlogs] = useState([]);

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

    useEffect(() => {
        const fetchVisitedBlogs = async () => {
          const ids = JSON.parse(localStorage.getItem('visitedBlogs')) || [];
          const blogs = await Promise.all(ids.map(id => fetch(`/blogs/${id}`).then(res => res.json())));
          setVisitedBlogs(blogs);
        };
        fetchVisitedBlogs();
      }, []);

  return (
    <div className='home'>
        <HeroSection />
        <h3 className='blog-heading space'>Recent Blogs</h3>
        <div className='blogs'>
            {blogs && blogs.map(blog => (
                <BlogDetails key={blog._id} blog={blog} />
            ))}

        </div>
        <div className='visited' >
            <VisitedBlogs visitedBlogs={visitedBlogs} />
        </div>
        <TestimonialSlider />

    </div>
  )
}

export default Home