import axios from "axios";

const API_URL = "http://localhost:8000";

export const predictPrice = async (payload) => {
  const response = await axios.post(
    `${API_URL}/predict`,
    payload
  );

  return response.data;
};
