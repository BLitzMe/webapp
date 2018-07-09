# get /posts
gives a list of 20 posts, in the order they should be displayed

## query inputs:
- location: string - optional. if given the result will only return posts with this location (exact string match)
- start: int - optional. if given, we don't send posts 0-19, but posts start-start+19.
example: /posts?location=Clausthal-Zellerfeld&start=17   for posts 17-36 in Clausthal-Zellerfeld
/posts for posts 0-20 anywhere

## responses: 
### 200 
json with an array of objects with the following attributes:
- title: string - the title of the post
- location: string - the location of the offerin
- picture: string - a relative link to the picture
- user: string - the username of the user that created the post
- date: string - a parsable indicating the time the post was created
- _id: string - a unique id of the post
- description: string - the post description
- comments: array - an array of comment objects
-- text: string - the comment text
-- user: string - the username of the user that created the comment
-- date: string - a parsable string indicating the time the comment was written
-- postID: string - the id of the post the comment was attached to
-- _id: string - a unique id for each comment
example:
[{
  "title": "Leckere Tomaten 19",
  "location": "Clausthal-Zellerfeld",
  "picture": "/img/tomatoes.png",
  "user": "testuser",
  "date": "2018-07-05T17:42:55.906Z",
  "_id": "UO2Q642HEQli1WMf"
  "description": "ganz viele tolle tomaten",
  "comments": [{
      "text": "alles supertoll",
      "user": "testuser2",
      "date": "2018-07-05T18:01:29.607Z",
      "postID": "4V1CIgebssdUWmBt",
      "_id": "7jR4OlqwHGPVMMVq"
    }]
}]

### 404 
in the case no post could be found, for example due to the fact that there are no posts in the given location

### 500
in the case an an internal server error occured



# get /posts/submit
allows the user of the api to add new posts to the database

## query inputs:
- user: string - the username that should be displayed with the post. 100 characters maximal (will be replaced with proper auth later)
- title: string - the title of the post, to be displayed on the main page and in the modal view. 100 characters maximal
- description: string - further description of the post, to be displayed in the modal view only. 500 characters maximal
- location: string - the location of the post. 100 characters maximal
example: /posts/submit?location=Clausthal-Zellerfeld&user=testuser&title=testtitle&description=testdescription

## responses:
### 200
confirmation that the post was added to the database. includes the id of the new post as a string in the body.
example: "UO2Q642HEQli1WMf"

### 400
a problem was found with the query data, and thus the post was not created. additional information about the problem is included as a string in the body.
example: "no location"

### 500
the post was not created since an internal server error occured.


# get /comment
allows the user of the api to add a new comment to an post in the database

## query inputs:
- user: string - the username that should be displayed with the comment. 100 characters maximal (will be replaced with proper auth later)
- text: string - the comment text. 200 characters maximal
- postID: string - the id of the post the comment should be added to
example: /comment?user=testcommenter&text=testcomment&postID=UO2Q642HEQli1WMf

## responses:
### 200
confirmation that the comment was added to the post. includes id of the new comment as a string in the body
example: "7jR4OlqwHGPVMMVq"

### 400
a problem was found with the query data, and thus the comment was not created. additional information about the problem is included as a string in the body.
example: "no user"

### 404 
in the case no post could be found for the given postID.

### 500
the post was not created since an internal server error occured.
