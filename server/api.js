/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();


//const Queue =  require("./models/queue");
//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});


// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.post("/greeting_State_database_apijs21", auth.ensureLoggedIn, (req, res) => {
  console.log(req.user._id);
  User.findById(req.user._id).then((user) => {
    console.log("user", user);
  user.greeting_State_UserSchemaln7 = req.body.state;
  user.save();
  res.send(user);
  })
}); //API method for sending greeting state

router.get("/greeting_State_database_apijs21", auth.ensureLoggedIn, (req, res) => {
  console.log(req.user._id);
  alert("Not logged in")
  User.findById(req.user._id).then((user) => {
    console.log("user", user);
    res.send({state: user.greeting_State_UserSchemaln7});
})
});

// workshop 3

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
