import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeCart: (state, action) => {
      const item = state.cartItems.find((t) => t.id === action.payload.id);
      state.cartItems.splice(item, 1);
    },

    increaseAmount: (state, action) => {
      const item = state.cartItems.find((t) => t.id === action.payload.id);
      item.amount = action.payload.amount + 1;
    },
    decreaseAmount: (state, action) => {
      const item = state.cartItems.find((t) => t.id === action.payload.id);
      item.amount = action.payload.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});
export const {
  clearCart,
  removeCart,
  increaseAmount,
  decreaseAmount,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
