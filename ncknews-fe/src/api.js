import axios from "axios";

const BASE_URL = "https://nc-knews-mohammedjubel.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles?limit=100000`);
  return data;
};

export const getArticlesByTopic = async topic => {
  const { data } = await axios.get(`${BASE_URL}/articles?topic=${topic}`);
  return data;
};

// export const getTopics = async () => {
//   const { data } = await axios.get(`${BASE_URL}/topics`);
//   return data;
// };
export const getTopics = async () => {
  return await axios.get(`${BASE_URL}/topics`).then(topics => {
    console.log(topics, "<---topics");
    return topics.data.topics;
  });
};

// export const getArticles = async topic => {
//   const URL = topic
//     ? `${BASE_URL}/articles?topic=${topic}`
//     : `${BASE_URL}/articles?limit=100000`;
//   const { data } = await axios.get(URL);
//   return data;
// };
