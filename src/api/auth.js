import axios from 'axios';

const API_BASE_URL = 'https://your-auth-api-url.com';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.post(`${API_BASE_URL}/logout`);
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
