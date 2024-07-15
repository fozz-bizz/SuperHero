import axios from "axios";

const BASE_URL = process.env.REACT_APP_SUPERHERO_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_SUPERHERO_ACCESS_TOKEN;

export const getSuperHeroDataById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${ACCESS_TOKEN}/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};
