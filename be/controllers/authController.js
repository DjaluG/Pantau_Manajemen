const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: 'Username tidak ditemukan' });
    }

    // For a real-world scenario, use a secure password hashing library
    if (password !== user.password) {
      return res.status(401).json({ message: 'Password salah' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ message: 'Login berhasil', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan saat proses login' });
  }
};

exports.logout = (req, res) => {
  // In a stateless JWT approach, there's no session to destroy
  res.json({ message: 'Logout berhasil' });
};
