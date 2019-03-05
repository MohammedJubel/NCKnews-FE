import axios from "axios";

const BASE_URL = "https://nc-knews-mohammedjubel.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles?limit=100000`);
  return data;
};

export const getArticlesByTopic = async topic => {
  const { data } = await axios.get(
    `${BASE_URL}/articles?topic=${topic}&limit=100`
  );
  return data;
};

export const getSingleArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data;
};

export const getTopics = async () => {
  return await axios.get(`${BASE_URL}/topics`).then(topics => {
    // console.log(topics, "<---topics");
    return topics.data.topics;
  });
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  console.log(data, "<-----data");
  return data;
};
