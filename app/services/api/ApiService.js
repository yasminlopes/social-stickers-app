import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  

export const ApiService = {
    async login(data) {
      try {
        const response = await api.post('/login', data);
        return response.data;
      } catch (error) {
        console.error('Erro ao fazer login:', error.message);
        throw error;
      }
    },
  };
  
