require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
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

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Connected to DB and Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(err);
})

