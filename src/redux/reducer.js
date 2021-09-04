import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

/* const loaderReducer = (state, { type, payload }) => {
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
}; */

const initialState = {
  items: [],
  loader: false,
  error: '',
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact(state, action) {
      return { ...state, filter: action.payload };
    },
  },

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

export const { addContacts, setContacts, filterContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
