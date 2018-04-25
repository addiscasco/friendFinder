var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var PORT = 3000;
// var apiRoute = require("./apiRoutes.js");

//using this function 
require('/apiroutes.js')(app);


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
//somewhere I'll be encoding my JSON
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Displays a single character, or returns false
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


