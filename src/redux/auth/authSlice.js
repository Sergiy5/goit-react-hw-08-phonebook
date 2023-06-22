import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {initialState} from './initialState'
import { logOutFulfilled, refreshUserFulfilled, refreshUserPending, refreshUserRejected, signInFulfilled } from './authActionsStatus';

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

export const authReducer = authSlice.reducer;
