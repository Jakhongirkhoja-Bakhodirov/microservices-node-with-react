const express = require('express');
const {randomBytes} = require('crypto');

const app = express();


const commentsByPostId = {}

app.use(express.json());

app.get('/api/v1/posts/:id/comments' , (req,res) => {
    res.status(200).json({
        data:commentsByPostId[req.params.id]
    });
});

app.post('/api/v1/posts/:id/comments' , (req,res) => {
    const commentId = randomBytes(4).toString('hex');
    
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id:commentId , content});

    commentsByPostId[req.params.id] = comments;

    res.status(201).json({
        data:comments
    });
});

app.listen(4001,() => {
    console.log('Server is running on port 4000');
});