// services/api.js
import axios from 'axios';

// Configuração do Axios com base na URL do backend NestJS
const api = axios.create({
  baseURL: 'http://localhost:3000',  // URL do seu backend NestJS
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para buscar dados do endpoint
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error; // Ou lidar com o erro conforme necessário
  }
};

// Você também pode criar funções POST, PUT, DELETE, etc.
