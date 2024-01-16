const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/user');
passport.use(new LocalStrategy(
    (username, password, done) => {
      User.findOne({ where: { username: username } })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (user.password !== password) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        })
        .catch(err => done(err));
    }
  ));
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then(user => done(null, user))
      .catch(err => done(err));
  });


  
  
  router.post('/login', authController.login);
  router.get('/logout', authController.logout);
  
module.exports = router;