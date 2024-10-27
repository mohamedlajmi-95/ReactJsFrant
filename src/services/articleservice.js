import axios from "../api/axios";
const ARTICLE_API = "articles";

export const fetcharticles = async () => {
  return await axios.get(ARTICLE_API);
};

export const fetcharticleById = async (articleId) => {
  return await axios.get(ARTICLE_API + "/" + articleId);
};

export const deletearticle = async (articleId) => {
  return await axios.delete(ARTICLE_API + "/" + articleId);
};

export const addatricle = async (article) => {
  return await axios.post(ARTICLE_API, article);
};

export const editarticle = async (article) => {
  return axios.put(ARTICLE_API + "/" + article._id, article);
};

export const fetcharticlespagination = async (page, limit, seachtext) => {
  return await axios.get(
    ARTICLE_API + `/art/pagination?filtre=${seachtext}${page}${limit}`
  );
};
