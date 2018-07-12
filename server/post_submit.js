//imports
var fs = require("fs");
var Datastore = require("nedb");
var postsDBpath = "posts.db";
var commentsDBpath = "comments.db";

//defining the scope for calls from external files
module.exports = {
  handlePostSubmitAPICall: function(request, response) {
    handleCall(request, response);
  },
  //added code
  handlePostRequest: function(req, res) {
    handlePostRequest(req, res);
  }
};

//handling the call
function handleCall(request, response) {
  console.log(
    new Date().toISOString() +
      " /posts/submit was called with query " +
      JSON.stringify(request.query)
  );

  var postDB = new Datastore({ filename: postsDBpath, autoload: true });
  var commentsDB = new Datastore({ filename: commentsDBpath, autoload: true });

  // query parameters:
  // user
  // title
  // description
  // location
  //example: http://localhost:3001/posts/submit?location=Clausthal-Zellerfeld&user=testuser&title=asdfgh&description=qwertzuiop

  //todo:  documentation, input data sanitation

  //check inputs
  if (!request.query.user) error400("no username");
  else if (typeof request.query.user != "string")
    error400("username no string");
  else if (request.query.user.length > 100) error400("username too long");

  if (!request.query.title) error400("no title");
  else if (typeof request.query.title != "string") error400("title no string");
  else if (request.query.title.length > 100) error400("title too long");

  if (!request.query.description) error400("no title");
  else if (typeof request.query.description != "string")
    error400("title no string");
  else if (request.query.description.length > 500) error400("title too long");

  if (!request.query.location) error400("no location");
  else if (typeof request.query.location != "string")
    error400("location no string");
  else if (request.query.location.length > 100) error400("location too long");

  if (response.statusCode === 400) {
    console.log(
      new Date().toISOString() +
        " found errors in query parameters, sending 400"
    );
    response.end();
    return;
  }

  console.log(
    new Date().toISOString() +
      " query parameters were ok, starting creation of new post..."
  );

  //compose post document
  post = {};
  post.user = request.query.user;
  post.title = request.query.title;
  post.location = request.query.location;
  post.picture = request.query.picture;
  post.date = new Date();
  post.valid = false;

  //compose comment document
  comment = {};
  comment.text = request.query.description;
  comment.user = request.query.user;
  comment.date = new Date();

  //first: create new post document in posts database with valid set to false
  postDB.insert(post, function(err, newPost) {
    if (err) {
      error500(err, "new post");
      return;
    }

    console.log(
      new Date().toISOString() + " new post created with id " + newPost._id
    );

    //update comment object with id of post
    comment.postID = newPost._id;

    //second: create new comment document in comments database linked to _id of new post document
    commentsDB.insert(comment, function(err, newComment) {
      if (err) {
        error500(err, "new comment");
        return;
      }

      console.log(
        new Date().toISOString() +
          " new comment created with id " +
          newComment._id
      );

      //third: set valid value of new post document in posts database to true
      postDB.update(
        { _id: newPost._id },
        { $set: { valid: true } },
        {},
        function(err, numReplaced) {
          if (err) {
            error500(err, "make post valid");
            return;
          }

          console.log(
            new Date().toISOString() + " post " + newPost._id + " set to valid"
          );

          //forth: return response to user
          response.writeHead(200, { "Content-Type": "text/html" });
          response.end(newPost._id);

          console.log(new Date().toISOString() + " 200 sent to caller");
        }
      );
    });
  });

  function error400(err) {
    if (err) {
      response.statusCode = 400;
      console.log(
        new Date().toISOString() + ": " + "found problem in query: " + err
      );
      response.write(err);
    }
  }

  function error500(err, location) {
    if (err) {
      console.log(new Date().toISOString() + ": " + location + ": " + err);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end();
    }
  }
}

























//trying post function
function handlePostRequest(req, res) {
  //compose post document
  

  console.log(
    new Date().toISOString() +
      " /posts/submit was called with query " +
      JSON.stringify(req.body)
  );

  var postDB = new Datastore({ filename: postsDBpath, autoload: true });
  var commentsDB = new Datastore({ filename: commentsDBpath, autoload: true });
  //check inputs
  if (!req.body.name) error400("no username");
  else if (typeof req.body.name != "string") error400("username no string");
  else if (req.body.name.length > 100) error400("username too long");

  if (!req.body.title) error400("no title");
  else if (typeof req.body.title != "string") error400("title no string");
  else if (req.body.title.length > 100) error400("title too long");

  if (!req.body.description) error400("no title");
  else if (typeof req.body.description != "string") error400("title no string");
  else if (req.body.description.length > 500) error400("title too long");

  if (!req.body.location) error400("no location");
  else if (typeof req.body.location != "string") error400("location no string");
  else if (req.body.location.length > 100) error400("location too long");

  if (res.statusCode === 400) {
    console.log(
      new Date().toISOString() +
        " found errors in query parameters, sending 400"
    );
    res.end();
    return;
  }

  //compose post document
  post = {};
  post.user = req.body.name;
  post.title = req.body.title;
  post.location = req.body.location;
  post.description = req.body.description;
  post.picture = req.body.picture;
  post.date = new Date();
  post.valid = false;

  

  //compose comment document
  comment = {};
  comment.text = req.body.description;
  comment.user = req.body.user;
  comment.date = new Date();

  //first: create new post document in posts database with valid set to false
  postDB.insert(post, function(err, newPost) {
    if (err) {
      error500(err, "new post");
      return;
    }

    console.log(
      new Date().toISOString() + " new post created with id " + newPost._id
    );

    //update comment object with id of post
    comment.postID = newPost._id;

    //second: create new comment document in comments database linked to _id of new post document
    commentsDB.insert(comment, function(err, newComment) {
      if (err) {
        error500(err, "new comment");
        return;
      }

      console.log(
        new Date().toISOString() +
          " new comment created with id " +
          newComment._id
      );

      //third: set valid value of new post document in posts database to true
      postDB.update(
        { _id: newPost._id },
        { $set: { valid: true } },
        {},
        function(err, numReplaced) {
          if (err) {
            error500(err, "make post valid");
            return;
          }

          console.log(
            new Date().toISOString() + " post " + newPost._id + " set to valid"
          );

          //forth: return response to user
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(newPost._id);

          console.log(new Date().toISOString() + " 200 sent to caller");
        }
      );
    });
  });

  function error400(err) {
    if (err) {
      res.statusCode = 400;
      console.log(
        new Date().toISOString() + ": " + "found problem in query: " + err
      );
      res.write(err);
    }
  }

  function error500(err, location) {
    if (err) {
      console.log(new Date().toISOString() + ": " + location + ": " + err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end();
    }
  }
}
