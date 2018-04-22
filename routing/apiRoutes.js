// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
//somewhere I'll be encoding my JSON
app.use(bodyParser.json());

// Routes
// app.get("/", function(req, res) {
//     res.send("Welcome to the Star Wars Page!");
//   });
  
  // Displays all characters
  app.get("/api/friends", function(req, res) {
     res.send("this is the api friend");
  });
  
  app.post("/api/friends", function(req, res) {
  res.send("THIS THIS ");

  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
