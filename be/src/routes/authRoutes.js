const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Endpoint dashboard, only accessible with a valid JWT token
router.get('/dashboard', authenticateToken, (req, res) => {
  const username = req.user.username;
  res.json({ message: `Welcome ${username} to the dashboard` });
});

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

module.exports = router;
