import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {initialState} from './initialState'

const signInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
const logOutFulfilled = (state) => {
  console.log(state)
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
}
const refreshUserPending = (state) => {
  state.isRefreshing = true;
}

const refreshUserFulfilled =(state, {payload}) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
}
    const refreshUserRejected = (state) => {
      state.isRefreshing = false;
    }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, signInFulfilled)
      .addCase(logIn.fulfilled, signInFulfilled)
      .addCase(logOut.fulfilled, logOutFulfilled)
      .addCase(refreshUser.pending, refreshUserPending)
      .addCase(refreshUser.fulfilled, refreshUserFulfilled)
      .addCase(refreshUser.rejected, refreshUserRejected);
  }
})
//   {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

export const authReducer = authSlice.reducer;
