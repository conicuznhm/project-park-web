import { createSlice } from '@reduxjs/toolkit';
import { getAccessToken, removeAccessToken } from '../utils/local-storage';
import * as authApi from '../apis/auth-api';

export const authSlice = createSlice({
  name: 'user',
  initialState: { authUser: getAccessToken() ? true : null },
  reducers: {
    loginCase: (state, action) => {
      state.authUser = action.payload;
    },
    logoutCase: (state, action) => {
      state.authUser = null;
    },
    //update user profile
    updateCase: (state, action) => {
      state.authUser = { ...state.authUser, ...action.payload };
    }
  }
});

export const fetchAuthUser = () => async (dispatch, getState) => {
  try {
    const res = await authApi.getUser();
    dispatch(loginCase(res.data.user));
  } catch (err) {
    removeAccessToken();
    console.error(err);
  }
};

export const { loginCase, logoutCase, updateCase } = authSlice.actions;
export const selectUser = state => state.user.authUser;
export default authSlice.reducer;
