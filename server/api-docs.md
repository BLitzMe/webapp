# /posts 
gives a list of 20 offerings, in the order they should be displayed
accepts get and post requests

query inputs:
- location: string - required. the result will only return posts with this location (exact string match)
- start: optional - if given, we don't send posts 0-19, but posts start-start+19.
example: /posts?location=Clausthal-Zellerfeld&start=17   for posts 17-36 in Clausthal-Zellerfeld

response: json with an array of objects with the following attributes:
- title: string - the title of the offering
- location: string - the location of the offerin
- picture: string - a relative link to the picture
- user: string - the username of the user that created the offering
- date: string - a parsable indicating the time the offering was created
- _id: string - a unique id of the offering
example:
[{
  "title": "Leckere Tomaten 19",
  "location": "Clausthal-Zellerfeld",
  "picture": "/img/tomatoes.png",
  "user": "testuser",
  "date": "2018-07-05T17:42:55.906Z",
  "_id": "UO2Q642HEQli1WMf"
}]

#/comments
gives a complete offering object including post description and comments for a given post id
accepts get and post requests

query inputs:
- postID: string - the id of the post the request is for, taken from the _id field of /posts
example: /comments?postID=9ITQyPG5upz8ieuj

response:
- title: string - the title of the offering
- location: string - the location of the offerin
- picture: string - a relative link to the picture
- user: string - the username of the user that created the offering
- date: string - a parsable string indicating the time the offering was created
- _id: string - the id of the offering
- description: string - the offering description
- comments: array - an array of comment objects
-- text: string - the comment text
-- user: string - the username of the user that created the comment
-- date: string - a parsable string indicating the time the comment was written
-- postID: string - the id of the post the comment was attached to
-- _id: string - a unique id for each comment
example:
{
  "title": "Leckere Tomaten",
  "location": "Clausthal-Zellerfeld",
  "picture": "/img/tomatoes.png",
  "user": "testuser1",
  "date": "2018-07-05T17:42:56.803Z",
  "_id": "4V1CIgebssdUWmBt",
  "description": "ganz viele tolle tomaten",
  "comments": [
    {
      "text": "alles supertoll",
      "user": "testuser2",
      "date": "2018-07-05T18:01:29.607Z",
      "postID": "4V1CIgebssdUWmBt",
      "_id": "7jR4OlqwHGPVMMVq"
    }
  ]
}