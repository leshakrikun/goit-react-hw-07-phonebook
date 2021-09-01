import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContacts,
  fetchError,
  fetchFinish,
  fetchStart,
  setContacts,
} from './actions';
import { loaderReducer } from './loaderReducer';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* export const postTodoOperation = (todo) => async (dispatch) => {
  const result = await axios.post("http://localhost:7777/tasks", todo);
  console.log("result", result);
}; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const postContactsOperation = contact => async dispatch => {
  dispatch(fetchStart());
  try {
    const result = await axios.post('http://localhost:7777/contacts', contact);
    console.log('result', result);
    console.log(`loader`, loaderReducer.state);
    dispatch(addContacts(result.data));
  } catch (error) {
    dispatch(fetchError(error));
  } finally {
    console.log(53);
    dispatch(fetchFinish());
  }
};

export const getContactsOperation = state => async dispatch => {
  dispatch(fetchStart());
  console.log(1);
  try {
    const result = await axios.get('http://localhost:7777/contacts');
    console.log(`loader`, loaderReducer.state);
    dispatch(setContacts(result.data));
    console.log('result1', result.data);
  } catch (error) {
    dispatch(fetchError(error));
  } finally {
    dispatch(fetchFinish());
    console.log(2);
  }
};

/* export const getContactsOperation = (result) => async dispatch => {
  /* dispatch(booksActions.fetchBooksRequest()); 

   try {
    const result = await axios.get("http://localhost:7777/contacts");
    dispatch(setContact(result.data))
    console.log("result1", result.data);
     /* const books = await bookShelfAPI.fetchBooks();
     dispatch(booksActions.fetchBooksSuccess(books)); 

   } catch (error) {
     /* dispatch(booksActions.fetchBooksError(error)); 
   }
 };
 */

/* 
export const getContactsOperation = createAsyncThunk(
  'setContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:7777/contacts", {
        
      });
      console.log("result81", data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
 */

/* const fetchContacts = createAsyncThunk(
    "fetchContacts",
    async (name, number) => await getContactsOperation(name, number)
  ); */

/*  const getContactsOperation = async ({ name, number }) => {
    console.log(name, number);
  
    const { data } = await axios.post("http://localhost:7777/contacts", {
      name,
      number,
    });
  
    return data;
  }; */
