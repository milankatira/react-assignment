import axios from "axios";

export const deleteproduct = async (id) => {
    return await axios.delete(`/cart/product/${id}`);
  };
  