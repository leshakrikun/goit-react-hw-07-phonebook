import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchError } from './actions';
/* import { getContactsOperation } from './operations' */
import { useDispatch, useSelector } from 'react-redux';
import initialStart from '../App';

import { combineReducers } from 'redux';

import { fetchStart, fetchFinish } from './actions'; //habr

import { types } from './types';

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async contact => {
    const result = await axios.post('http://localhost:7777/contacts', contact);
    return result.data;
  },
);

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const result = await axios.get('http://localhost:7777/contacts');
    return result.data;
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const result = await axios.delete(`http://localhost:7777/contacts/${id}`);
    return result.data;
  },
);

export const filterContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const result = await axios.delete(`http://localhost:7777/contacts/${id}`);
    return result.data;
  },
);

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
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loader: false,
    error: '',
  },
  reducers: {
    /*  addContacts: (state, {payload}) => ({
       ...state, items: [...state.items, payload] 
    }),
    setContacts: (state, {payload}) => ({
        ...state, items: [payload] 
    }),
    deleteContact(state, action) {
      return {
        ...state,
        contacts: [...state.filter(state => state.id !== action.payload)],
      };
    },
    fetchStart(state, action) {
      console.log(33, state);
      return { ...state, loader: [(action.payload = true)] };
    },
    fetchFinish(state, action) {
      return { ...state, loader: [(action.payload = false)] };
    },*/
    filterContact(state, action) {
      return { ...state, filter: action.payload };
    },
  },

  /*  [deleteContact.fulfilled]: (state, action) =>
  state.filter((element) => element.id !== action.meta.arg),
}); */

  /* [deleteContact.fulfilled]: (state, action) =>
state.filter((element) => element.id !== action.meta.arg),
}); */

  extraReducers: {
    [deleteContacts.pending]: state => {
      state.loader = true;
    },
    [deleteContacts.rejected]: state => {
      state.loader = false;
      state.error = 'Error';
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = '';
      state.items = state.items.filter(state => state.id !== action.meta.arg);
    },
    /* [filterContacts.pending]: (state) => {
      state.loader = true;
    },
    [filterContacts.rejected]: (state) => {
      state.loader = false;
      state.error = "Error"
    },
    [filterContacts.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = "";
      state.items = state.items.filter(state => state.id !== action.meta.arg)
    }, */
    [createContact.pending]: (state, action) => {
      state.loader = true;
    },
    [createContact.rejected]: (state, action) => {
      state.loader = false;
      state.error = 'Error';
    },
    [createContact.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = '';
      state.items = [...state.items, action.payload];
    },
    [getContacts.pending]: state => {
      state.loader = true;
    },
    [getContacts.rejected]: state => {
      state.loader = false;
      state.error = 'Error';
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.error = '';
      state.items = [...state.items, ...payload];
    },
  },
});

export const { addContacts, setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
/* export const contactsSlice = (state = initialState, { type, payload }) => {
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
      }; */

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
    } 
    default:
      return state;
  }
};*/
/* console.log(`contactsSlice`, contactsSlice.items); */
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
