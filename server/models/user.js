const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  googleid: String,
  personalQueue: [String], //queue of users in your line
  queuesIn: [String], //queue of lines you're in
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
