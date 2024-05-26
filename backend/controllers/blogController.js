const mongoose = require('mongoose');
const Blog = require('../models/blogModel');

// GET all blogs
const getAllBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        res.status(200).json(blogs);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
};


// GET a specific blog
const getBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    const blog = await Blog.findById(id);

    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    return res.status(200).json(blog);
};

// POST a new blog
const createBlog = async (req, res) => {
    const {title, author, content} = req.body;
    try{
       const blog = await Blog.create({title, author, content, userId: req.user._id});
       res.status(200).json(blog);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
};


// PATCH updated data to a specific blog
const updateBlog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    const blog = await Blog.findByIdAndUpdate(id, { ...req.body }, { new: true });
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    return res.status(200).json(blog);
}

// DELETE a specific blog
const deleteBlog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Blog not found' });
    }

    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    return res.status(200).json(blog);
};

module.exports = {
    createBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
    updateBlog
};