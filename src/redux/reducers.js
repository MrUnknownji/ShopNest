import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const cartItem = state.cartItems[item.id];
      if (cartItem) {
        state.cartItems[item.id].quantity += 1;
      } else {
        state.cartItems[item.id] = { ...item, quantity: 1 };
      }
    },

    decrement: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems[itemId];
      if (item && item.quantity > 1) {
        state.cartItems[itemId].quantity -= 1;
      }
    },

    deleteFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId]) {
        delete state.cartItems[itemId];
      }
    },

    calculatePrice: (state) => {
      const cartItemValues = Object.values(state.cartItems);

      const sum = cartItemValues.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      state.subTotal = sum;
      state.shipping = state.subTotal > 1000 || state.subTotal < 1 ? 0 : 200;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.tax + state.shipping;
    },
  },
});

export const { addToCart, decrement, deleteFromCart, calculatePrice } =
  cartSlice.actions;
export default cartSlice.reducer;