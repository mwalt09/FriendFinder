// Dependencies
var path = require("path");
var bodyParser = require("body-parser");
var friends = require("../data/friends.js");


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    // var newFriend = body.parse;
    friends.push(req.body);
    res.json(friends);
  });
};
