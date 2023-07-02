var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/create', function(req, res, next) {
  userModel.create({
    username:req.body.username,
    name:req.body.name,
    age:req.body.age,
    image:req.body.image
  }).then(function(createuser){
    res.send(createuser)
  })
});
router.get('/find', function(req, res, next) {
  userModel.find()
  .then(function(alluser){
    res.render("feed",{alluser});
  })
});

router.get('/delete/:id', function(req, res, next) {
  userModel.findOneAndDelete({_id: req.params.id},)
  .then(function(){
    res.redirect("back");
  })
});
router.get('/update', function(req, res, next) {
  userModel.findOneAndUpdate()
  .then(function(alluser){
    res.render(alluser);
  })
});

module.exports = router;
