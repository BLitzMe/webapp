//imports
var fs = require('fs');
var url = require('url');

//defining the scope for calls from external files
module.exports = { 
	handlePostsAPICall : function(request, response) {
			handleCall(request, response);
		}
}

//handling the initial call
function handleCall(request, response) {
	example = {
        "location" : "Clausthal-Zellerfeld",
        "id" : "sdhf78wei",
        "title" : "Leckere Tomaten",
        "picture" : "/img/tomatoes.png"
    }
    
    returnData = new Array();
    
    for (i = 0; i < 20; i++) {
        returnData.push(JSON.parse(JSON.stringify(example))); //deep copy
        returnData[i].title += (" " + i);
        returnData[i].id += (" " + i);        
    }
    
    response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(JSON.stringify(returnData));
	response.end();	
}
