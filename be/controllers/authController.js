// controllers/authController.js
const { User } = require('../models');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: 'Username tidak ditemukan' });
    }

    // Untuk keperluan contoh, perbandingan password dilakukan secara sederhana
    if (password !== user.password) {
      return res.status(401).json({ message: 'Password salah' });
    }

    // Jika verifikasi berhasil, set session atau token untuk otorisasi
    // Misalnya, Anda dapat menggunakan session atau token JWT di sini
    req.session.loggedIn = true;
    req.session.user = user;  
    res.json({ message: 'Login berhasil', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan saat proses login' });
  }
};

exports.logout = (req, res) => {
  // Hapus informasi login dari session
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Terjadi kesalahan saat logout' });
    }
    res.json({ message: 'Logout berhasil' });
  });
};
