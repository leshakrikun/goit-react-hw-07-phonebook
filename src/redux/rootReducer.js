import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loaderReducer } from './loaderReducer';
import { contactsSlice } from './reducer';

export const rootReducer = combineReducers({
  contactsSlice: contactsSlice,
  //error: errorReducer,
  //loader: loaderReducer,
});
