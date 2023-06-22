export const signInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
export const logOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
export const refreshUserPending = state => {
  state.isRefreshing = true;
};

export const refreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
export const refreshUserRejected = state => {
  state.isRefreshing = false;
};
