const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

mangoose.connect("mongodb://127.0.0.1:27017/testing");

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  age:Number,
  email:String
})
module.exports=mongoose.model("user", userSchema)