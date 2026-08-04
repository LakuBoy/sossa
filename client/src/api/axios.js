import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add token to requests if it exists
// NOTE: Content-Type is NOT set globally so axios can auto-set
// multipart/form-data with proper boundary for FormData requests,
// and application/json for regular JSON payloads.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;