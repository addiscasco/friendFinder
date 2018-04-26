var path = require('path');
var friendData = require(path.join(__dirname, '../app/friends'));

//exported a function that could accept arguements attaches routes to app
module.exports = function (app) {

    //some route
    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });
    //another route
    // app.get("/api/survey", function(req, res){
    //     console.log("COOL");
    // }); 
    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        console.log(req.body);
        //take result of the user's survey POST and parse it 
        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;

        for (var i = 0; i < friendsData.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Match.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= bestMath.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatcht.friendDifference = totalDifference;
                }
            }
        }
        friends.push(userData);
        res.json(bestMatch);
    });
};