const passport = require('passport');

exports.login = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
};
