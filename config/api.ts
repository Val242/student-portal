// src/api/api.ts   or   utils/api.ts

import axios from 'axios';

const API_BASE_URL = 'http://10.69.102.72:3000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token automatically to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken'); // or wherever you store your token
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
  
}

);
// Add this in the same api.ts file

export const userTaskApi = {
  // Get current user's tasks
  getMyTasks: async () => {
    const response = await api.get('/user-task/my-task');
    return response.data;
  },

  // You can add more methods later
  // createTask: async (data) => { ... }
};


export default api;