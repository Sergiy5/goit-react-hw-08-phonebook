import { combineReducers } from "@reduxjs/toolkit";
import { contactsfilterSlice } from './contacts/contactsFilterSlice';
import { phoneBookReducer } from "./contacts/contactsSlice"; 

export const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  filter: contactsfilterSlice,
});
