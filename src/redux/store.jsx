import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import parkReducer from './park-slice';

export const store = configureStore({
  reducer: {
    user: authReducer,
    park: parkReducer
  }
});
