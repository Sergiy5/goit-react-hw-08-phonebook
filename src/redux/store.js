import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { authReducer } from './auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistorReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:
    persistorReducer,
   middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const filterContact = createAction('contacts/filterContact');

// const contactsReducer = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),

// });

// const filterReducer = createReducer('', {
//   [filterContact]: (state, action) => action.payload
// });

//  reducer: {
//     contacts: contactsReducer,
//     filter: filterContact,
//   },
