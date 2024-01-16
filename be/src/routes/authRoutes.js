// routes/index.js
const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Endpoint dashboard, hanya bisa diakses setelah login berhasil
router.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    const username = req.session.user.username;
    res.json({ message: `Welcome ${username} to the dashboard` });
  } else {
    res.status(401).json({ message: 'Anda harus login untuk mengakses dashboard' });
  }
});

module.exports = router;