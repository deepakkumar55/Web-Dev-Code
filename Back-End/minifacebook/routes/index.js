var express = require("express");
var router = express.Router();
var usersModel = require("./users");
var commentModel = require("./comments");
var postModel = require("./post");
var localStorage = require("passport-local");
const passport = require("passport");
passport.use(new localStorage(usersModel.authenticate()));

router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/register", function (req, res, next) {
  var newUser = {
    username: req.body.username,
    name: req.body.name,
    image: req.body.image,
    email: req.body.email,
  };
  usersModel
    .register(newUser, req.body.password)
    .then(function (result) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    })
    .catch(function (err) {
      res.send(err);
    });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  function (req, res, next) {}
);

router.get("/register", function (req, res, next) {
  res.render("Register");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
}
router.get("/profile", isLoggedIn, function (req, res, next) {
  usersModel
    .findOne({ username: req.session.passport.user })
    .then((loggedInUser) => {
      res.render("profile", { user: loggedInUser });
    });
});

router.get("/logout", function (req, res, next) {
  if (req.isAuthenticated()) {
    req.logOut((err) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("/");
      }
    });
  } else {
    res.redirect("/");
  }
});
router.get("/feed", isLoggedIn, function (req, res, next) {
  postModel
    .find()
    .populate("owner")
    .then(function (alpost) {
      res.render("feed", { posts: alpost });
    });
});
router.get("/profile/:id", isLoggedIn, async function (req, res, next) {
  usersModel.findOne({ _id: req.params.id }).then(function (userdetails) {
    res.render("profile", { user: userdetails });
  });
});
router.get("/edit/:id", isLoggedIn, async function (req, res, next) {
  usersModel.findOne({ _id: req.params.id }).then(function (editdetails) {
    res.render("edit", { user: editdetails });
  });
});

router.post("/update/:id", isLoggedIn, async function (req, res, next) {
  usersModel
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        username: req.body.username,
        name: req.body.name,
        image: req.body.image,
        email: req.body.email,
      }
    )
    .then(function (updateuser) {
      res.render("/feed", { user: updateuser });
    });
});

router.get("/delete/:id", isLoggedIn, async function (req, res, next) {
  usersModel
    .findOne({
      username: req.session.passport.user,
    })
    .then(function (loggedInUser) {
      usersModel
        .findOne({
          _id: req.params.id,
        })
        .then(function (finduser) {
          if (loggedInUser.username == finduser.username) {
            usersModel
              .findOneAndDelete({ _id: req.params.id })
              .then(function (user) {
                res.redirect("/register");
              });
          } else {
            res.redirect("/feed");
          }
        });
    });
});

router.get("/createpost", isLoggedIn, function (req, res, next) {
  res.render("createpost");
});

router.post("/createpost", isLoggedIn, function (req, res, next) {
  usersModel
    .findOne({
      username: req.session.passport.user,
    })
    .then(function (loggedInUser) {
      postModel
        .create({
          owner: loggedInUser._id,
          image: req.body.image,
          caption: req.body.caption,
        })
        .then((newpost) => {
          res.send(newpost);
        });
    });
});
router.get("/postlike/:postid", isLoggedIn, function (req, res, next) {
  postModel
    .findOne({
      _id: req.params.postid,
    })
    .then(function (post) {
      usersModel
        .findOne({
          username: req.session.passport.user,
        })
        .then((loggedInUser) => {
          var indexOfLoggedInUser = post.likes.indexOf(loggedInUser._id);
          if (indexOfLoggedInUser === -1) {
            post.likes.push(loggedInUser._id);
            post.save().then((post) => {
              res.redirect("back");
            });
          } else {
            post.likes.splice(indexOfLoggedInUser, 1);
            post.save().then((post) => {
              res.redirect("back");
            });
          }
        });
    });
});

module.exports = router;
