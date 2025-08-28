import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.apiUrl, // or your full API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);
