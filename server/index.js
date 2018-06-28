"use strict";
// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
require('ejs')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const cookieSession = require('cookie-session');

const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = "mongodb://localhost:27017/tweeter";
//Open up connection to MongoDB
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

app.get('/login', function(req , res){
  //const user_id = req.session.user_id;
  //const user_object = checkForUsersInDB(user_id);

  // let templateVars = { shortURL: req.params.id,
  //                     longURL: urlDatabase1[req.params.id],
  //                     user : user_object,

  //                     };
  res.render('tweet-login') ;
})
//Pass the DataBase to our data helper file
const DataHelpers = require("./lib/data-helpers.js")(db);
// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);
// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);
//Make sure local host is listening
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
});