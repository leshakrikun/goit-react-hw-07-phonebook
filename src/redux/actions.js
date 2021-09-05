import { createAsyncThunk } from '@reduxjs/toolkit';
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
