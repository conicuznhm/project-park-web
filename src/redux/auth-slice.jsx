import { createSlice } from '@reduxjs/toolkit';
import { getAccessToken } from '../utils/local-storage';
import * as authApi from '../apis/auth-api';

export const authSlice = createSlice({
  name: 'user',
  initialState: { authUser: getAccessToken() ? true : null },
  reducers: {
    loginCase: (state, action) => {
      state.authUser = action.payload;
    },
    logout: (state, action) => {
      state.authUser = null;
    },
    fetchAuth: (state, action) => {
      state.authUser = action.payload;
    }
  }
});

export const fetchAuthUser = () => async (dispatch, getState) => {
  try {
    const res = await authApi.getUser();
    dispatch(fetchAuth(res.data.user));
  } catch (err) {
    console.error(err);
  }
};

export const { loginCase, logout, fetchAuth } = authSlice.actions;
export const selectUser = state => state.user.authUser;
export default authSlice.reducer;
