import { createSlice } from '@reduxjs/toolkit';

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: [],
  reducers: {
    setBasket: (state, action) => {
      const basket = action.payload
      state.push(basket);
    },
    removeItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      let newArray = state.slice();
      newArray.splice(index, 1);
      return newArray;
    },
    cleanBasket: (state, action) => {
      state = action.payload
      return state;
    }
  },
});

export const { setBasket, removeItem, cleanBasket } = shoppingSlice.actions;

// Selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item)=>item.price + amount, 0);

export const selectBasket = state => state.basket;

export default shoppingSlice.reducer;
