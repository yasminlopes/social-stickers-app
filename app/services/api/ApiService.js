import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.3.22:3333',
    timeout: 5000,
  });

export const ApiService = {
    async login(data) {
      try {
        const response = await api.post('/login', data);
        return response.data;
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    },

    async registerUser(data) {
        try {
          const response = await api.post('/users', data);

          return response.data
          
        } catch (error) {
          console.error(error.message);
          throw error;
        }
    }
  };
  
