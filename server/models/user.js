const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  googleid: String,
  greeting_State_UserSchemaln7: Number,

});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
