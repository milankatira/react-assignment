import axios from "axios";
const server_url='http://localhost:3000'

export const getProductbyId = async (id) => {
  return await axios.get(`/admin/product/${id}`);
};

export const getProduct = () => {
  return axios.get(`/admin/product`)
};

export const addProduct = async (user) => {
  return await axios.post(`/admin/addproduct`, user);
};

export const deleteproduct = async (id) => {
  return await axios.delete(`/admin/product/${id}`);
};

export const editproduct = async (id) => {
  return await axios.put(`/admin/editproduct/${id}`);
};
