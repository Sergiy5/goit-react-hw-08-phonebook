export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => {
    console.log(state.auth.user);
    return state.auth.user
};

export const selectIsRefreshing = state => state.auth.isRefreshing;

