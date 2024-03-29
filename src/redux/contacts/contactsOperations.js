import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../shared/services/contactsAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.getAllContacts();
      return contacts;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await contactsApi.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchStatusContact = createAsyncThunk(
  'contacts/statusContact',
  async (contact, { rejectWithValue }) => {
    try {
      await contactsApi.statusContact(contact);
      return contact;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
