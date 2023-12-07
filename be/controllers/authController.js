const passport = require('passport');

exports.login_get = (req, res) => {
  res.render('login');
};

exports.login_post = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
});

exports.logout_get = (req, res) => {
  req.logout();
  res.redirect('/login');
};
