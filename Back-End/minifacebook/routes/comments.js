const mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
  useer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  data:String,
  time:String,
  post:{
    type: mongoose.Schema.Types.ObjectId,  
    ref:"post"
  }
});

module.exports = mongoose.model("comment", commentSchema);
