import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api/auth";

const api = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  login: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, userData);
      localStorage.setItem("token", response.data.token); // Save JWT token
      return response.data.token; // Return token to use in frontend
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  getDashboard: async () => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Unauthorized");
    try {
      const response = await axios.get(`${API_BASE_URL}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data || "Unauthorized access");
    }
  },
};

export default api;
