//imports
var fs = require('fs');
var Datastore = require('nedb');
var postsDBpath = "posts.db";
var commentsDBpath = "comments.db";

if (false === fs.existsSync(postsDBpath)) {
	createMockDatabase();
}

//defining the scope for calls from external files
module.exports = { 
	handlePostSubmitAPICall : function(request, response) {
			handleCall(request, response);
		}
}

//handling the call
function handleCall(request, response) {
	console.log(new Date().toISOString() + " /posts/submit was called with query " + JSON.stringify(request.query));
	
	// query parameters:
	// user 
	// title
	// description
	// location
	// picture
	//example: http://localhost:3001/posts/submit?location=Clausthal-Zellerfeld&user=testuser&title=asdfgh&description=qwertzuiop
	
	//todo: check inputs, catch errors, debug/logging output
	post = {};
	post.user = request.query.user;
	post.title = request.query.title;
	post.location = request.query.location;
	post.picture = request.query.picture;
	post.date = new Date();
	var description = request.query.description;
	
	
	var postDB = new Datastore({ filename: postsDBpath, autoload: true });
	var commentsDB = new Datastore({ filename: commentsDBpath, autoload: true });
			
	postDB.insert(post, function (err, newDoc) {
		comment = {};
		comment.text = description;	
		comment.user = newDoc.user;	
		comment.date = new Date();
		comment.postID = newDoc._id;
		
		commentsDB.insert(comment, function (err, newDoc) {});
		
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end();
	});	
}



