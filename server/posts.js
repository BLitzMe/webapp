//imports
var fs = require('fs');
var url = require('url');
var Datastore = require('nedb');

//defining the scope for calls from external files
module.exports = { 
	handlePostsAPICall : function(request, response) {
			handleCall(request, response);
		}
}

//handling the call
function handleCall(request, response) {
		
	var startingPost = 0;
	if (request.query.start)	
		startingPost = parseInt(request.query.start);
	
	postDB = new Datastore({ filename: "posts.db", autoload: true });
	postDB.find({"location" : request.query.location}).sort({date: -1}).exec(function(err, docs) {
		
		docs = docs.slice(startingPost, startingPost + 20);
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(JSON.stringify(docs));
		response.end();	
	});
}