/* import {types} from './types' */
//+++++++++++++++++++++++++++++++
import axios from 'axios';
import {
  ADD_CONTACTS,
  SET_CONTACTS,
  FETCH_START,
  FETCH_FINISH,
  FETCH_ERROR,
  FETCH_ERROR_CLEAN,
  DELETE_CONTACT,
  FILTER_CONTACTS,
} from './types';
//++++++++++++++++++++++++++++++++
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

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
});
//============================================================================================================================

/* import {
  ADD_TODO,
  SET_TODO,
  TODO_FETCH_ERROR,
  TODO_FETCH_FINISHED,
  TODO_FETCH_START,
} from "./types";

export const setTodo = (array) => ({
  type: SET_TODO,
  payload: array,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const todoFetchStart = () => ({
  type: TODO_FETCH_START,
});

export const todoFetchFinished = () => ({
  type: TODO_FETCH_FINISHED,
});

export const todoFetchError = (error) => ({
  type: TODO_FETCH_ERROR,
  payload: error,
}); */

// export function addTodo(todo) {
//   return {
//     type: ADD_TODO,
//     payload: todo,
//   };
// }

export const postContactsOperation = contact => async dispatch => {
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
