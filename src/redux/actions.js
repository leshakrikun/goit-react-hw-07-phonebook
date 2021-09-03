/* import {types} from './types' */
//+++++++++++++++++++++++++++++++
/* import axios from 'axios';
import {
  ADD_CONTACTS,
  SET_CONTACTS,
  FETCH_START,
  FETCH_FINISH,
  FETCH_ERROR,
  FETCH_ERROR_CLEAN,
  DELETE_CONTACT,
  FILTER_CONTACTS,
} from './types'; */
//++++++++++++++++++++++++++++++++
/* import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const addContacts = data => ({
  type: ADD_CONTACTS,
  payload: data,
});
export const setContacts = array => ({
  type: SET_CONTACTS,
  payload: array,
});
export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});
export const filterContact = data => ({
  type: FILTER_CONTACTS,
  payload: data,
});
export const fetchStart = () => ({
  type: FETCH_START,
});
export const fetchFinish = () => ({
  type: FETCH_FINISH,
});
export const fetchError = error => ({
  type: FETCH_ERROR,
  payload: error,
});
export const fetchErrorClean = () => ({
  type: FETCH_ERROR_CLEAN,
}); */
//============================================================================================================================

/* export const addContacts = data => ({
  type: types.ADD_CONTACTS,
  payload: data,
});
export const setContacts = array => ({
  type: types.SET_CONTACTS,
  payload: array,
});
export const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});
export const filterContact = data => ({
  type: types.FILTER_CONTACTS,
  payload: data,
});
export const fetchStart = () => ({
  type: types.FETCH_START,
});
export const fetchFinish = () => ({
  type: types.FETCH_FINISH,
});
export const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});
export const fetchErrorClean = () => ({
  type: types.FETCH_ERROR_CLEAN,
}); */

// export function addTodo(todo) {
//   return {
//     type: ADD_TODO,
//     payload: todo,
//   };
// }

/* export const postContactsOperation = contact => async dispatch => {
  dispatch(fetchStart());
  try {
    const result = await axios.post('http://localhost:7777/contacts', contact);
    dispatch(addContacts(result.data));
  } catch (error) {
    dispatch(fetchError(error));
  } finally {
    dispatch(fetchFinish());
  }
};

export const deleteContactOperation = id => async dispatch => {
  dispatch(fetchStart());
  try {
    await axios.delete(`http://localhost:7777/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(fetchError(error));
  } finally {
    dispatch(fetchFinish());
  }
};

export const getContactsOperation = () => async dispatch => {
  dispatch(fetchStart());
  try {
    const result = await axios.get('http://localhost:7777/contacts');
    dispatch(setContacts(result.data));
  } catch (error) {
    dispatch(fetchError(error));
  } finally {
    dispatch(fetchFinish());
  }
};

export const filterContactOperation = value => async dispatch => {
  dispatch(fetchStart());
  try {
    const result = await axios.get('http://localhost:7777/contacts');
    dispatch(filterContact(value));
  } catch (error) {
    dispatch(fetchError(error));
  } finally {
    dispatch(fetchFinish());
  }
};
 */
