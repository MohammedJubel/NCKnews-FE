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

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
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
  return data;
};

export const postNewComment = async (article_id, commentToAdd) => {
  console.log(article_id, commentToAdd, "<---This");
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    commentToAdd
  );
  console.log(data, "data");
  return data.comment;
};

export const postArticle = newArticle => {
  console.log(newArticle, "api new Article");
  return axios
    .post(`${BASE_URL}/articles`, newArticle)
    .then(({ data }) => data.article);
};

export const getSingleUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const handleVote = votes => {
  axios.patch(
    `https://nc-knews-mohammedjubel.herokuapp.com/api/articles/${
      this.props.id
    }`,
    { inc_votes: votes }
  );
};

export const deleteCommentById = comment_id => {
  console.log(comment_id, "comment Id");
  return axios.delete(`${BASE_URL}/comments/${comment_id}`);
};
