// pages/api/v1/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Lakukan otentikasi di sini (gantilah dengan logika otentikasi Anda)
    if (username === 'user@example.com' && password === 'password') {
      // Jika otentikasi berhasil, buat token JWT
      const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });

      // Kirim token sebagai respons
      res.status(200).json({ token });
    } else {
      // Jika otentikasi gagal, kirimkan pesan kesalahan
      res.status(401).json({ error: 'Authentication failed' });
    }
  } else {
    // Metode HTTP selain POST tidak diizinkan
    res.status(405).end();
  }
}
