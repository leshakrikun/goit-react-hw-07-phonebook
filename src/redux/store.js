import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './reducer';

const rootReducer = {
  contacts: contactsSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
