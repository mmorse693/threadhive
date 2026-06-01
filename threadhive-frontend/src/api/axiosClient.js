import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
// const API_BASE_URL = 'https://w04-mls.onrender.com/api';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach auth token from localStorage before each request
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

// Normalise error shape so callers can read err.response.data consistently
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosClient;
