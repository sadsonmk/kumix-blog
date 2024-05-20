require('dotenv').config();
const express = require('express');
const blogsRoutes = require('./routes/blogs');
// create an express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// use the blogsRoutes
app.use('/blogs', blogsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})