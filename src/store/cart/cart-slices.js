import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  itemsQuantity: 0,
  isCartContentChanged: false,
  favoriteItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.itemsQuantity++;
      state.isCartContentChanged = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          thumbnail: newItem.thumbnail,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      const existingItem = state.items[existingItemIndex];

      if (existingItem) {
        state.itemsQuantity--;
        state.isCartContentChanged = true;

        if (existingItem.quantity === 1) {
          state.items.splice(existingItemIndex, 1);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
  },
});





export default cartSlice;
export const cartActions = cartSlice.actions;
