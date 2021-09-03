import { configureStore } from '@reduxjs/toolkit';
/* import { rootReducer } from './rootReducer'; */
import contactsSlice from './reducer';

const rootReducer = {
  contacts: contactsSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
/* import { configureStore } from "@reduxjs/toolkit";
import todoReducerWithSlice from "../redux/slices/todoSlice";
const rootReducer = {
  todos: todoReducerWithSlice,
}; */
