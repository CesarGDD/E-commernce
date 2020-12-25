import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from '../features/shoppingSlice';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    basket: shoppingReducer,
    user: userReducer
  },
});
