// utils/auth.ts
import axios from 'axios';

export const login = async (username: string, password: string): Promise<boolean> => {
  try {
    const response = await axios.post<{ token: string }>('http://localhost:3001/api/v1/auth/login', {
      username,
      password,
    });

    if (response.status === 200) {
      // Login berhasil, simpan token ke lokal storage atau cookie
      const { token } = response.data;
      localStorage.setItem('token', token);
      return true;
    } else {
      // Login gagal
      return false;
    }
  } catch (error) {
    console.error('Error during login:', error);
    return false;
  }
};

export const logout = () => {
  // Hapus token dari lokal storage atau cookie
  localStorage.removeItem('token');
};
