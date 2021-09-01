import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchError } from './actions';
/* import { getContactsOperation } from './operations' */
import { useDispatch, useSelector } from 'react-redux';
import initialStart from '../App';

import { combineReducers } from 'redux';

import { fetchStart, fetchFinish } from './actions'; //habr

/* import {types} from './types' */
import {
  ADD_CONTACTS,
  SET_CONTACTS,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  /* FETCH_START,
    FETCH_FINISH, */
  FETCH_ERROR,
  FETCH_ERROR_CLEAN,
} from './types';

/* ADD_TODO,
  TODO_FETCH_ERROR,
  TODO_FETCH_FINISHED,
  TODO_FETCH_START,
  SET_TODO, */

/*   import {types} from './types'

  export const addContact = (data) => ({
      type: types.ADD_CONTACTS,
      payload: data,
  } */

const loaderReducer = (state, { type, payload }) => {
  switch (type) {
    case fetchStart:
      console.log(22);
      return { loader: true };
    case fetchFinish:
      console.log(23);
      return { loader: false };
    default:
      return state;
  }
};

const initialState = {
  items: [],
  loader: null,
  error: null,
};

const initialState1 = [
  {
    name: 'y',
    number: '666666',
    id: 'ba167899-5fe5-4689-8953-1d0cdae91bec',
  },
  {
    name: 'n',
    number: '77777777777',
    id: 'accd4529-ecd2-4129-8d11-114cccb8d668',
  },
  {
    name: 'gfa',
    number: '666666666',
    id: 'f11cda90-6fdf-4904-b679-c52f86bde440',
  },
  {
    name: 'b',
    number: '666666666',
    id: 'ec6faeaf-c314-4b0a-bcb1-064a8f349b3d',
  },
  {
    name: 'ds',
    number: '555555555',
    id: '202db0cc-7e04-4513-9352-fa2c112bbf17',
  },
  {
    name: 'cxc',
    number: '555555555',
    id: '93da2c93-4de2-40b6-9dde-3cfe17b98aae',
  },
];
console.log(3, initialState);

/* const setContacts = (array) => ({
    type: types.SET_CONTACTS,
    payload: array,
}) */

/* export const getTodoOperation = () => async (dispatch) => {
    dispatch(todoFetchStart());
    try {
      const result = await axios.get("http://localhost:7777/tasks");
      dispatch(setTodo(result.data)); */

/* export const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case fetchError:
      return {error: payload}
      default:
        return state;
  }
}; */
/* export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, items: [...state.items, payload] };
    case SET_TODO:
      return { ...state, items: payload };
    case TODO_FETCH_START:
      return { ...state, loader: true };
    case TODO_FETCH_FINISHED:
      return { ...state, loader: false };
    case TODO_FETCH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}; */

export const contactsSlice = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACTS:
      return { ...state, items: [...state.items, payload] };
    case SET_CONTACTS:
      return { ...state, items: payload };
    case DELETE_CONTACT:
      return {
        ...state,
        items: [...state.items.filter(state => state.id !== payload)],
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        items: [...state.items.filter(state => state.name.includes(payload))],
      };

    /* setContacts(state, action) {
      console.log(7);
        return {...state,items:[action.payload]};
    },
    deleteContact(state, action) {
        return {...state, contacts:[...state.filter((state) => state.id !== action.payload)]};
    },
    fetchStart(state,action) {
      console.log(33,state);
      return {...state, loader:[action.payload=true]}
    },
    fetchFinish(state,action) {
      return {...state, loader:[action.payload=false]}
    },
    filterContact(state, action) {
        return {...state, filter: action.payload};
    } */
    default:
      return state;
  }
};
console.log(`contactsSlice`, contactsSlice.items);
/* 
export const getContactsOperation = () => async (dispatch) => {
  dispatch(fetchStart())
  console.log(1);
try {
  const result = await axios.get("http://localhost:7777/contacts");
  /* console.log(`loader`, loaderReducer.state) 
  dispatch(setContacts(result.data))
  console.log("result1", result.data);
  return result.data
  /* setContacts(result.data); 
} catch (error) {
  /* dispatch(fetchError(error)) 
} finally {
  dispatch (fetchFinish())
  console.log(2);
} 
}; */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* import {
  ADD_TODO,
  TODO_FETCH_ERROR,
  TODO_FETCH_FINISHED,
  TODO_FETCH_START,
  SET_TODO,
} from "./types";
const initialState = {
  items: [],
  loader: false,
  error: "",
}; */
