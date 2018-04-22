var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = 3000;

var friends = {
    "name":"Ahmed",
    "photo":"http://www.flickr.com/photos/chmurka/2524849923/",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  };