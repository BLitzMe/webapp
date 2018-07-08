//imports
var fs = require('fs');
var Datastore = require('nedb');
var postsDBpath = "posts.db";

if (false === fs.existsSync(postsDBpath)) {
	createMockDatabase();
}

//defining the scope for calls from external files
module.exports = { 
	handlePostsAPICall : function(request, response) {
			handleCall(request, response);
		}
}

//handling the call
function handleCall(request, response) {
	console.log(new Date().toISOString() + " /posts was called with query " + JSON.stringify(request.query));
	
	// query parameters:
	// start: optional. if given, we don't send posts 0-19, but posts start-start+19.
	// location: optional. if given the result will only include posts with this location (exact string match)
		
	postDB = new Datastore({ filename: postsDBpath, autoload: true });
    
    if (request.query.location)
        postDB.find({"location" : request.query.location}).sort({date: -1}).exec(function(err, docs) {
            sendData(request, response, err, docs)			
        });
    else
        postDB.find({}).sort({date: -1}).exec(function(err, docs) {
            sendData(request, response, err, docs)			
        });
}

function sendData(request, response, err, posts) {
    if (err) {
        console.log(new Date().toISOString() + " " + err);
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.end();
        return;
    }
    
    if (posts.length < 1){
            console.log(new Date().toISOString() + " couldn't find posts for location " + request.query.location + ", returning 404");
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end();
            return;
    }
        
	var startingPost = 0;
	if (request.query.start)	
		startingPost = parseInt(request.query.start);
    
    console.log(new Date().toISOString() + " found " + posts.length + " entries for location \"" + request.query.location + "\". starting Post is " + startingPost);
    
    posts = posts.slice(startingPost, startingPost + 20);
	
	
	//nasty hack to make /comments endpoint obsolete
	//=============================
	
	var commentsDBpath = "comments.db";
	var commentsDB = new Datastore({ filename: commentsDBpath, autoload: true });	
	commentsDB.find({ $where: function () { 
		for(post of posts) 
			if (post._id == this.postID) 
				return true; 
			return false; 
		} 
	}).sort({date: -1}).exec(function(err, comments) {
		for (post of posts) {
			postComments = [];
			for (comment of comments)			
				if (comment.postID == post._id)
					postComments.push(comment);
				
			post.description = postComments.pop().text;
			
			postComment = "";
			for (comment of postComments)
				postComment = postComment + comment.text + "\n";
			post.comments = postComment;
		}
		//end of nasty hack.
		//=============================		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(JSON.stringify(posts));
		response.end();
		console.log(new Date().toISOString() + " response send with " + posts.length + " items");
    });
}

//helper functions
function createMockDatabase() {
	
	console.log("creating new post database...");
    postDB = new Datastore({ filename: postsDBpath, autoload: true });	
	
	for(i = 99; i >=0; i--) {
		item = {};
		item.title = "Leckere Tomaten " + i;		
		item.location = "Clausthal-Zellerfeld";
		item.picture = "http://localhost:3002/img/tomatoes.jpg";
		item.user = "testuser";		
		item.date = new Date();
        item.valid = true;
		
		postDB.insert(item, function (err, newDoc) {});
		
		console.log("post " + i +" created");
		
		for(n = 0; n < 50000000; n++);
	}  
	
	console.log("new post database created.");
}
