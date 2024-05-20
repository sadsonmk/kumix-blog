const express = require('express');
const Blog = require('../models/blogModel');

const router = express.Router();

// GET all blogs
router.get('/', (req, res) => {
    res.json({message: 'GET all blogs'});
})

// GET a specific blog
router.get('/:id', (req, res) => {
    res.json({message: 'GET a specific blog'});
})

// POST a new blog
router.post('/', async (req, res) => {
    const {title, author, content} = req.body;
    try{
       const blog = await Blog.create({title, author, content});
       res.status(200).json(blog);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
})

// PATCH updated data to a specific blog
router.patch('/:id', (req, res) => {
    res.json({message: 'PATCH updated data to a specific blog'});
})

// DELETE a specific blog
router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a specific blog'});
})


module.exports = router;