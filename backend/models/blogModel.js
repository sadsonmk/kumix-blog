// Define the schema for the blog collection in the database
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;