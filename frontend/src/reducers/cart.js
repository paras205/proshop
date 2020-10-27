import {
  CART_ADD_ITEM,
  REMOVE_ITEM,
  SAVE_CART_SHIPPING_ADDRESS,
  SAVE_CART_PAYMENT_METHOD
} from "../constants/cart";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload)
      };
    case SAVE_CART_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload
      };
    case SAVE_CART_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload
      };
    default:
      return state;
  }
};
