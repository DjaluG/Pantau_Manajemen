const { User } = require('../models');
const { Op } = require('sequelize');

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll(); // Pastikan User di sini adalah model yang telah diimpor dengan benar
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  exports.getUsersByFilter = async (req, res) => {
    const { name, role } = req.query;
    let whereClause = {};
  
    if (name) {
      whereClause.name = { [Op.like]: `%${name}%` }; // Mencocokkan sebagian string dari atribut name
    }
  
    if (role) {
      whereClause.role = role;
    }
  
    try {
      const users = await User.findAll({ where: whereClause });
  
      if (users.length === 0) {
        return res.status(404).json({ message: 'Tidak ada pengguna yang sesuai dengan filter' });
      }
  
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data user' });
    }
  };