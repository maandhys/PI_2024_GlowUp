// hooks/useAuth.js
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from 'react';
import { login, logout } from '../services/authService';

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const loginUser = async (credentials) => {
    try {
      const token = await login(credentials);
      setToken(token);
    } catch (error) {
      console.error('Erro de login', error);
    }
  };

  const logoutUser = () => {
    logout();
    setToken(null);
  };

  return { token, loginUser, logoutUser };
};

export default useAuth;
