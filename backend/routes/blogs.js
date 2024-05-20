const express = require('express');
const {
    createBlog,
    getAllBlogs,
    getBlog,
    updateBlog,
    deleteBlog
} = require('../controllers/blogController');


const router = express.Router();

// GET all blogs
router.get('/', getAllBlogs)

// GET a specific blog
router.get('/:id', getBlog)

// POST a new blog
router.post('/', createBlog)

// PATCH updated data to a specific blog
router.patch('/:id', updateBlog)

// DELETE a specific blog
router.delete('/:id', deleteBlog)


module.exports = router;