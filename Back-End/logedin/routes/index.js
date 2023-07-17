var express = require('express');
var router = express.Router();
var users= require('./users')
var localStorage=require('passport-local');
const passport = require('passport');
passport.use(new localStorage(users.authenticate()))


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/register', function(req, res, next) {
  var newUser={
    username:req.body.username,
    image:req.body.image,

  };
  users.register(newUser,req.body.password)
  .then(function(result){
    passport.authenticate('local')(req,res,function(){
      res.redirect('/login')
    })
  })
  .catch(function(err){
    res.send(err);
  })
});

router.post('/login',passport.authenticate('local',{
  successRedirect:'/profile',
  failureRedirect:'/login',
}),function(req,res,next){});

router.get('/login', function(req, res, next) {
  res.render('login');
});
function isLoggedIn(req,res,next){
  if (req.isAuthenticated()) {
  return next();
  }   
  else{
    res.redirect('/login')
  }
}
router.get('/profile',isLoggedIn, function(req, res, next) {
  users.findOne({username:req.session.passport.user}).then(loggedInUser=>{
    res.render('profile',{user:loggedInUser})
  })
});



module.exports = router;
