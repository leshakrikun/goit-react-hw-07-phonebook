import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loaderReducer } from './loaderReducer';
import { contactsSlice } from './reducer';
import { getContactsOperation } from './operations';

const contacts = createReducer([], {
  getContactsOperation: (_, action) => action.payload,
});

export default combineReducers({
  contactsSlice: contactsSlice.reducer,
  error: errorReducer,
  loader: loaderReducer,
});

/* 
const reducer = combineReducers({
    counter: counter.reducer,
    user: user.reducer,
  }) */
