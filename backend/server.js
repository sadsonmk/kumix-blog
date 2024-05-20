require('dotenv').config();
const express = require('express');
const blogsRoutes = require('./routes/blogs');
// create an express app
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/blogs', blogsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})