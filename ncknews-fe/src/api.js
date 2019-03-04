import axios from "axios";

const BASE_URL = "https://nc-knews-mohammedjubel.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles?limit=100000`);
  return data;
};
