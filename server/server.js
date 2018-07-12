//apiserver
var express = require('express');
var postsAPI = require('./posts.js');
var commentAPI = require('./comment.js');
var postSubmitAPI = require('./post_submit.js');

var server = express();

server.get("/posts/submit", postSubmitAPI.handlePostSubmitAPICall);
server.get("/posts", postsAPI.handlePostsAPICall);
server.get("/comment", commentAPI.handleCommentAPICall);

server.listen(3001);
console.log("api server active. waiting for connections...")




//imageserver
var fs = require('fs');
var url = require('url'); 
var http = require('http');

http.createServer(function (req, res) {	
  path = "." + url.parse(req.url, true).pathname;  
  
  fs.readFile(path, function(err, data) {
    if (err || (!path.startsWith("./img/"))) {
	  console.log(new Date().toISOString() + " can't find image " + path + " returning 404");
      res.writeHead(404, {'Content-Type': 'image/jpg'});
      return res.end();
    } 
	console.log(new Date().toISOString() + " returning image " + path);
    res.writeHead(200, {'content-type': 'image/jpg'});
    res.write(data);
    return res.end();
  });
    
}
).listen(3002);
console.log("image server active. waiting for connections...")