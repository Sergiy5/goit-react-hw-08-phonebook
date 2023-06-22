import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { contactsfilterSlice } from './contacts/contactsFilterSlice';
import { phoneBookReducer } from "./contacts/contactsSlice"; 
export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: phoneBookReducer,
  filter: contactsfilterSlice,
});
