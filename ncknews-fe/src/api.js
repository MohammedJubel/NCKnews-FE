import axios from "axios";

const BASE_URL = "https://nc-knews-mohammedjubel.herokuapp.com/api";

export const getArticles = async sort_by => {
  const { data } = await axios.get(
    `${BASE_URL}/articles?limit=100000&sort_by=${sort_by}`
  );
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

export const deleteCommentById = comment_id => {
  return axios.delete(`${BASE_URL}/comments/${comment_id}`);
};

export const deleteArticleById = async article_id => {
  console.log(BASE_URL);
  const res = await axios.delete(`${BASE_URL}/articles/${article_id}`);
  console.log(res);
};

export const voteOnItem = async (comment_id, article_id, voteChange) => {
  console.log(comment_id, "comment_id");
  const URL = comment_id
    ? `${BASE_URL}/comments/${comment_id}`
    : `${BASE_URL}/articles/${article_id}`;
  const { data } = await axios.patch(URL, {
    inc_votes: voteChange
  });
  return data.article;
};

// export const voteOnComment = async (comment_id, voteChange) => {
//   const { data } = await axios
//     .patch(`${BASE_URL}/comments/${comment_id}`, {
//       inc_votes: voteChange
//     })
//     .catch(console.dir);
//   return data.comment;
// };
