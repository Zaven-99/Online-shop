import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./cart/main-slice";
import cartSlice from "./cart/cart-slices";
import favoriteSlice from './favourite/favourites-slice';



const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    cart: cartSlice.reducer,
    favorite: favoriteSlice.reducer,

  },
});

export default store;
