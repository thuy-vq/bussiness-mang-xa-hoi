import axios from "./axios.config";

export const login = (body) => {
  return axios.post("/auth/login", body);
};

export const signUp = (body) => {
  return axios.post("/auth/sign-up", body);
};

export const logout = () => {
  return axios.get("/user/logout");
};

export const getUserInfo = () => {
  return axios.get("/user/me");
};

export const getAllRealEstate = () => {
  return axios.get("/estate");
};

export const getRealEstateDetail = (id) => {
  return axios.get(`/estate/${id}`);
};

export const getRealEstateComment = (id) => {
  return axios.get(`/comment/${id}`);
};

export const createComment = (realEstateId, content) => {
  return axios.post(`/comment/${realEstateId}`, { content });
};

export const replyComment = (commentId, content) => {
  return axios.post(`/comment/reply/${commentId}`, { content });
};

export const inviteSomeone = (realEstateId, email) => {
  return axios.post(`/estate/${realEstateId}/invite`, { email });
};
