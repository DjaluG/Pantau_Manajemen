// routes/index.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/getuserController');

router.get('/users', userController.getAllUsers);

module.exports = router;
