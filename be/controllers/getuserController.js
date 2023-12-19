const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll(); // Pastikan User di sini adalah model yang telah diimpor dengan benar
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
