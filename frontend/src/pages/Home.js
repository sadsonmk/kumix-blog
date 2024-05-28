import { useEffect, useState } from 'react'
import { useBlogsContext } from '../hooks/useBlogsContext'
import BlogDetails from '../components/BlogDetails'
import HeroSection from '../components/HeroSection'
import VisitedBlogs from '../components/VisitedBlogs';
import TestimonialSlider from '../components/TestimonialSlider';
import MyPagination from '../components/MyPagination'


const Home = () => {

    const {blogs, dispatch} = useBlogsContext()
    const [visitedBlogs, setVisitedBlogs] = useState([]);

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [blogsPerPage] = useState(8)



    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true)
            const res = await fetch('/blogs')
            const data = await res.json()
            setLoading(false)
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

    const indexOfLastBlog = currentPage * blogsPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    if (loading) {
        return <h3>Loading...</h3>
    }
  return (
    <div className='home'>
        <HeroSection />
        <h3 className='blog-heading space'>Recent Blogs</h3>
        <div className='blogs'>
            {currentBlogs && currentBlogs.map(blog => (
                <BlogDetails key={blog._id} blog={blog} />
            ))}
        </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <MyPagination
            blogsPerPage={blogsPerPage}
            totalBlogs={blogs.length}
            currentPage={currentPage}
            paginate={paginate}
        />
    </div>
        <div className='visited' >
            <VisitedBlogs visitedBlogs={visitedBlogs} />
        </div>
        <TestimonialSlider />

    </div>
  )
}

export default Home