const express = require('express');

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
router.post('/', (req, res) => {
    res.json({message: 'POST a new blog'});
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