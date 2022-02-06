const express = require('express');
const {randomBytes} = require('crypto');

const app = express();


const posts = {}

app.use(express.json());

app.get('/api/v1/posts' , (req,res) => {
    res.status(200).json({

    });
});

app.post('/api/v1/posts' , (req,res) => {
    const id = randomBytes(4).toString('hex');
    const { title , description } = req.body;

    posts[id] = {
        id , title , description
    }

    res.status(201).json({
        data:posts
    });
});

app.listen(4000,() => {
    console.log('Server is running on port 4000');
});