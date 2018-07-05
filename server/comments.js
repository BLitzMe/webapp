//imports
var fs = require('fs');
var Datastore = require('nedb');
var commentsDBpath = "comments.db";
var postsDBpath = "posts.db";

if (false === fs.existsSync(commentsDBpath)) {
	createMockDatabase();
}

//defining the scope for calls from external files
module.exports = { 
	handleCommentsAPICall : function(request, response) {
			handleCall(request, response);
		}
}

//handling the call
function handleCall(request, response) {
	console.log(new Date().toISOString() + " /comments was called with query " + JSON.stringify(request.query));
	
	// getting data for the post
	postDB = new Datastore({ filename: postsDBpath, autoload: true });
	postDB.find({"_id" : request.query.postID}).sort({date: 1}).exec(function(err, docs) {
	
		if (err) {
			console.log(new Date().toISOString() + " " + err);
			response.writeHead(500, {'Content-Type': 'text/html'});
			response.end();
			return;
		}
		
		if (docs.length < 1){
			console.log(new Date().toISOString() + " couldn't find post, returning 404");
			response.writeHead(404, {'Content-Type': 'text/html'});
			response.end();
			return;
		}
		
		returnItem = docs.pop();
	
		//if post was found, get the comments
		commentsDB = new Datastore({ filename: commentsDBpath, autoload: true });
		commentsDB.find({"postID" : request.query.postID}).sort({date: -1}).exec(function(err, docs) {
			
			if (err) {
				console.log(new Date().toISOString() + " " + err);
				response.writeHead(500, {'Content-Type': 'text/html'});
				response.end();
			return;
			}
				
			if (docs.length < 1){
				console.log(new Date().toISOString() + " couldn't find comments for post " + request.query.postID + ", returning 500");
				response.writeHead(500, {'Content-Type': 'text/html'});
				response.end();
				return;
			}
			
			console.log(new Date().toISOString() + " found " + docs.length + " comments for post \"" + request.query.postID + "\".");
			
			//build return object and send it
			returnItem.description = docs.pop().text;
			returnItem.comments = docs;
			
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(JSON.stringify(returnItem));
			response.end();
			
			console.log(new Date().toISOString() + " response send");		
		});
	});
}


//helper functions
function createMockDatabase() {
	
	console.log("creating new comment database...");
    commentsDB = new Datastore({ filename: commentsDBpath, autoload: true });	
	postsdb = new Datastore({ filename: postsDBpath, autoload: true });	
	
	ids = [];
	
	postsdb.find({}, function (err, docs) {
		for(post of docs)
			ids.push(post["_id"]);
		console.log(JSON.stringify(ids));
		
		console.log("creating dummy comments for " + ids.length + " posts");
		
		for(i = 0; i <100; i++) {
			for (id of ids) {
				item = {};
				item.text = "alles supertoll nummer " + i;	
				item.user = "testuser";		
				item.date = new Date();
				item.postID = id;
				
				commentsDB.insert(item, function (err, newDoc) {});				
			}
			
			console.log("comment " + i +" for all posts created");
			
			for(n = 0; n < 50000000; n++);			
		}  	
		
		console.log("new comment database created.");
		
	});	
}
