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
	console.log(new Date().toISOString() + " /posts was called...");
	
	var startingPost = 0;
	if (request.query.start)	
		startingPost = parseInt(request.query.start);
	
	postDB = new Datastore({ filename: "posts.db", autoload: true });
	postDB.find({"location" : request.query.location}).sort({date: -1}).exec(function(err, docs) {
		
		console.log(new Date().toISOString() + " found " + docs.length + " entries for location \"" + request.query.location + "\". starting Post is " + startingPost);
		
		docs = docs.slice(startingPost, startingPost + 20);
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(JSON.stringify(docs));
		response.end();
		
		console.log(new Date().toISOString() + " response send");
		
	});
}


