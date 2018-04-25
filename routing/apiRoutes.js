// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
var friends = require('.app/data/friends.js');

// var htmlRoutes = require("./htmlRoutes.js");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
//somewhere I'll be encoding my JSON
app.use(bodyParser.json());

// Displays JSON of all possible friends
function testing(){
    app.get("./app/data/friends", function (req, res) {
        return res.json(friendsArray);
    
    });
}



//handles incoming surveyresults  and handle compatiability logic
app.post("/api/friends", function (req, res) {
    res.send("THIS THIS ");

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// module.exports = htmlRoutes.js;