// services/authService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    const { token } = response.data;
    localStorage.setItem('token', token); // Armazena o token no localStorage
    return token;
  } catch (error) {
    console.error('Erro de login', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
