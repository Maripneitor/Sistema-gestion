import axios from 'axios';
// import { useAuthStore } from '../store/authStore';

// TODO: Descomentar al integrar el backend en Docker
/*
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

apiClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
*/

const apiClient = axios.create(); // Placeholder para mocks

export default apiClient;
