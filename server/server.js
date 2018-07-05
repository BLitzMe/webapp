var express = require('express');var http = require('http');
var postsAPI = require('./posts.js');


var server = express();

server.get("/posts", postsAPI.handlePostsAPICall);

server.listen(3001);
console.log("server active. waiting for connections...")

