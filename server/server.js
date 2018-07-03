var http = require('http');
var fs = require('fs');
var url = require('url');
var postsAPI = require('./posts.js');

http.createServer(server).listen(3001);


function server(request, response) {
	var q = url.parse(request.url, true);
	if (q.pathname.startsWith("/posts"))
		postsAPI.handlePostsAPICall(request, response);
	else {
		response.writeHead(404, {'Content-Type': 'text/html'});
		response.end();
	}
}
