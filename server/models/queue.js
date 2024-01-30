const mongoose = require("mongoose");

const QueueSchema = new mongoose.Schema({
  queue: [String],
  queueNum: Number,0
  username: String,
  googleid: String,
});

// compile model from schema
module.exports = mongoose.model("queue", QueueSchema);

//need to append something
//do I append something like queueSchema.queue.a