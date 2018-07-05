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
	
	
	if (false === fs.existsSync("posts.db")) {
		createMockDatabase();
	}
	
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



function createMockDatabase(postDBpath) {
	
	console.log("creating new database...");
    postDB = new Datastore({ filename: "posts.db", autoload: true });	
	
	for(i = 99; i >=0; i--) {
		item = {};
		item.title = "Leckere Tomaten " + i;		
		item.location = "Clausthal-Zellerfeld";
		item.picture = "/img/tomatoes.png";
		item.user = "testuser";		
		item.date = new Date();
		
		postDB.insert(item, function (err, newDoc) {});
		
		console.log("item " + i +" created");
		
		for(n = 0; n < 50000000; n++);
	}  
	
	console.log("new database created.");
}


