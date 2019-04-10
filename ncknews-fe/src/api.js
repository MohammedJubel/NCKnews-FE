import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-knews-mohammedjubel.herokuapp.com/api"
});

export const getArticles = async sort_by => {
  const { data } = await request.get("/articles", {
    params: {
      sort_by: [sort_by],
      limit: 10,
      page: 1
    }
  });
  return data.articles;
};

export const getArticleById = async article_id => {
  const { data } = await request.get(`/articles/${article_id}`);
  return data.article;
};

export const getArticlesByTopic = async topic => {
  const { data } = await request.get(`/articles?topic=${topic}`, {
    params: {
      limit: 100
    }
  });
  return data.articles;
};

export const getTopics = async () => {
  const { data } = await request.get("/topics");
  return data.topics;
};

export const postTopic = async topic => {
  const { data } = await request.post("/topics", topic);
  return data;
};

export const getComments = async article_id => {
  const { data } = await request.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const postNewComment = async (article_id, commentToAdd) => {
  const { data } = await request.post(
    `/articles/${article_id}/comments`,
    commentToAdd
  );
  return data.comment;
};

export const postArticle = async newArticle => {
  const { data } = await request.post(`/articles`, newArticle);
  return data.article;
};

export const getSingleUser = async username => {
  const { data } = await request.get(`/users/${username}`);
  return data.user;
};

export const getAllUsers = async () => {
  const { data } = await request.get("/users");
  return data.users;
};

export const deleteCommentById = async comment_id => {
  const { data } = await request.delete(`/comments/${comment_id}`);
  return data;
};

export const deleteArticleById = async article_id => {
  const { data } = await request.delete(`/articles/${article_id}`);
  return data;
};

export const voteOnItem = async (comment_id, article_id, voteChange) => {
  const URL = comment_id
    ? `/comments/${comment_id}`
    : `/articles/${article_id}`;
  const { data } = await request.patch(URL, {
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
