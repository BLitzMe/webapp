//imports
var fs = require('fs');
var Datastore = require('nedb');
var commentsDBpath = "comments.db";
var postsDBpath = "posts.db";


//defining the scope for calls from external files
module.exports = { 
	handleCommentAPICall : function(request, response) {
			handleCall(request, response);
		}
}

//handling the call
function handleCall(request, response) {
	console.log(new Date().toISOString() + " /comment was called with query " + JSON.stringify(request.query));
	
	
    //check inputs
    if (!request.query.user)
        error400("no username");    
    else if (typeof request.query.user != "string")
        error400("username no string");        
    else if (request.query.user.length > 100)
        error400("username too long");
    
    if (!request.query.text)
        error400("no text");    
    else if (typeof request.query.text != "string")
        error400("text no string");        
    else if (request.query.text.length > 200)
        error400("text too long");
    
	
    if (response.statuscode === 400) {
        console.log(new Date().toISOString() + " found errors in query parameters, sending 400");
        response.end();
        return;        
    }   	
		
	// check whether post exists
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
		  
		//compose comment document
		comment = {};
		comment.text = request.query.text;	
		comment.user = request.query.user;	
		comment.date = new Date();
		comment.postID = request.query.postID;  
	
		//if post was found, write the comment
		commentsDB = new Datastore({ filename: commentsDBpath, autoload: true });
		commentsDB.insert(comment, function (err, newComment) {      
            if (err) {
                error500(err, "new comment");
                return;
            }
            
            console.log(new Date().toISOString() + " new comment created with id " + newComment._id);
            
			// return response to user
			response.writeHead(200, {'Content-Type': 'text/html'});				
			response.end(newComment._id);
			
			console.log(new Date().toISOString() + " 200 sent to caller");

        });	
	});
	
	
    function error400(err) {
        if (err) {
            response.statuscode = 400;
            console.log(new Date().toISOString() + ": " + "found problem in query: " + err);            
            response.write(err);
        }
    }
	
	function error500(err, location) {
        if (err) {
            console.log(new Date().toISOString() + ": " + location + ": " + err);
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end();
        }
    }
}
