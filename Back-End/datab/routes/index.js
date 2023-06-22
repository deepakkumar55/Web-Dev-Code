var express = require('express');
var router = express.Router();
const userModel = require("./users");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/create', function(req, res, next) {
  userModel.create({
    username:"Aryan",
    name:"Deepak Gupta",
    email:"dk119819@gmail.co"
  }).then(function(user){
    res.send(user);
  })
});
router.get('/find', function(req, res, next) {
  userModel.findOne().then(function(alluser){
    res.send(alluser);
  })
});
router.get('/delete', function(req, res, next) {
  userModel.findOneAndDelete({_id: "6491ab85044a5661344c54d2"}).then(function(aluser){
    res.send(aluser);
  })
});
router.get('/update', function(req, res, next) {
  userModel.findOneAndUpdate({_id: "6491d74f9bb8e8ede34b54ff"},{email:"dr434395@gmail.com"},{new:true} ).then(function(alupuser){
    res.send(alupuser);
  })
});

module.exports = router;
