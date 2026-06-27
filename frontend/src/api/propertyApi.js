import axios from "axios";

const API_URL = "https://ai-property-price-calculator.onrender.com";

export const predictPrice = async (payload) => {
  const response = await axios.post(
    `${API_URL}/predict`,
    payload
  );

  return response.data;
};
