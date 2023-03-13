import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccessToken, removeAccessToken } from "../utils/local-storage";
import * as authApi from "../apis/auth-api";
import jwtDecode from "jwt-decode";

// const initialState = { authUser: getAccessToken() ? true : null };
const initialState = { authUser: getAccessToken() ? jwtDecode(getAccessToken()) : null };
export const authSlice = createSlice({
  name: "user",
  initialState,
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
