var express = require('express');
var router = express.Router();
var userModel = require('./users');
const passport = require('passport');
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel,passport.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/')
});
router.get('/register', function(req, res, next) {
  var newUser=new userModel({
    username:req.body.username,
    email:req.body.email,
    age:req.body.age
    
  });
  User.register(newUser, req.body.password)
  .then(function (regiter) {
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile")
    })
    
  })
});
router.post('/login',passport.authenticate("local",{
 successRedirect:"/profile",
 failureRedirect:"/login"
}),function(req,res){});

module.exports = router;
