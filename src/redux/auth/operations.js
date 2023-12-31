import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Add JWT util
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Remove JWT util
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


// Method post /users/signup; body: { name, email, password } 
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const { name, email } = JSON.parse(error.config.data);
      toast(`The user ${name} with email ${email} already exsist`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Method post /users/login; body: { email, password }  
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const { email } = JSON.parse(error.config.data);
      toast(`Incorect email ${email} or password`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Method post /users/logout; headers: Authorization: Bearer token  
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Method get /users/current; headers: Authorization: Bearer token 
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

      try {
        // Як що є токен, тоді додаєм його до HTTP хедеру і робимо запит
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
