import axios from "axios";

import envConfig from "./env.config";
import authService from "../app/feature/auth/services/auth.service";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: envConfig.baseUrl,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    // Retrieve the token from auth service
    const token = await authService.getUserIdToken();

    // If token exists, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Check if error response status is 401 (Unauthorized)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error, e.g., redirect to login
      console.error("Unauthorized, logging out...");
      // Perform logout or token refresh logic
      // todo
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
