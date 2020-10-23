import axios from "axios";

import { CART_ADD_ITEM, REMOVE_ITEM } from "../constants/cart";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://127.0.0.1:5000/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = id => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: id
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
