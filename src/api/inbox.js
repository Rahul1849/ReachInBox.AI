import axios from 'axios';

const API_BASE_URL = 'https://your-inbox-api-url.com';

export const fetchInboxData = async (authToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/inbox`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching inbox data:', error);
    throw error;
  }
};

export const getMessageDetails = async (authToken, messageId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages/${messageId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching message details:', error);
    throw error;
  }
};
