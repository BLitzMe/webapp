var http = require('http');
var fs = require('fs');
var url = require('url');
var postsAPI = require('./posts.js');
var Datastore = require('nedb');
var express = require('express');


if (false === fs.existsSync("posts.db")) {
    setupDatabase();
}

var server = express();

server.get("/posts", postsAPI.handlePostsAPICall);

server.listen(3001);
console.log("server active. waiting for connections...")



function setupDatabase(postDBpath) {
	
	console.log("creating new database...");
		
	var sleep = require('sleep');
	
    postDB = new Datastore({ filename: "posts.db", autoload: true });
	example = {
        "location" : "Clausthal-Zellerfeld",
        "id" : "sdhf78wei",
        "title" : "Leckere Tomaten",
        "picture" : "/img/tomatoes.png"
    }
	
	for(i = 99; i >=0; i--) {
		item = JSON.parse(JSON.stringify(example));		
		item.title = "Leckere Tomaten " + i;
		
		item.date = new Date();
		postDB.insert(item, function (err, newDoc) {});
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
		console.log("item " + i +" created");
	}  
	
	console.log("new database created.");
}


