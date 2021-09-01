import { types } from './types';

export const addContacts = data => ({
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
});
