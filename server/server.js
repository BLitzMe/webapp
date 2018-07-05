var express = require('express');
var postsAPI = require('./posts.js');
var commentsAPI = require('./comments.js');


var server = express();

server.get("/posts", postsAPI.handlePostsAPICall);
server.get("/comments", commentsAPI.handleCommentsAPICall);

server.listen(3001);
console.log("server active. waiting for connections...")
