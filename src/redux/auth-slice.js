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

//Thunk
// const initialState = { authUser: getAccessToken() ? true : null };

// export const fetchAuthUser = createAsyncThunk('fetchAuth', async (_, store) => {
//   try {
//     const auth = await authApi.getUser();
//     // store.dispatch(loginCase(res.data.user));
//     return auth;
//   } catch (err) {
//     removeAccessToken();
//     // console.error(err);
//     throw err;
//   }
// });

// export const authSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     loginCase: (state, action) => {
//       state.authUser = action.payload;
//     },
//     logoutCase: (state, action) => {
//       state.authUser = null;
//     },
//     //update user profile
//     updateCase: (state, action) => {
//       state.authUser = { ...state.authUser, ...action.payload };
//       // state.authUser = action.payload;
//     }
//   },
//   // extraReducers: {
//   //   [fetchAuthUser.fulfilled]: (state, action) => {
//   //     state.auth = action.payload;
//   //   },
//   //   [fetchAuthUser.rejected]: (state, action) => {
//   //     state.auth = null;
//   //     removeAccessToken();
//   //     state.err = action.err.message;
//   //   }
//   // }
// });

export const { loginCase, logoutCase, updateCase } = authSlice.actions;
export const selectUser = state => state.user.authUser;
export default authSlice.reducer;
