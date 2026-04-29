// src/api/api.ts   or   utils/api.ts

import axios from 'axios';
export const API_BASE_URL = 'http://10.220.141.72:3000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


let cachedToken: string | null = null;

export const setToken = (token: string | null) => {
  cachedToken = token;
};

export const getToken = () => cachedToken;



// Add token automatically to every request
//  interceptor uses MEMORY token (NOT SecureStore)
api.interceptors.request.use((config) => {
  const token = getToken?.(); // or use cachedToken directly

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


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
export const getUserProfile = {
  getMyProfile: async()=>{
    const response = await api.get('/users/me')
    console.log(response.data)
    return response.data
  },
  getMyActivities: async()=>{
    const response = await api.get('/activity')
    console.log(response.data)
    return response.data
  },
}



export default api;