const mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  image: String,
  caption: String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("post", postSchema);
