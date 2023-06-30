const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/social-media-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      res.json({ success: false });
    } else {
      const user = new User({ username, password: hash });
      user.save()
        .then(() => {
          res.json({ success: true });
        })
        .catch(error => {
          console.error('Error saving user:', error);
          res.json({ success: false });
        });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      console.error('Error finding user:', err);
      res.json({ success: false });
    } else if (!user) {
      res.json({ success: false });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          res.json({ success: false });
        } else if (result) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
