import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import authReducer from './auth/authSlice';
import tasksReducer from './tasks/tasksSlice';
// import { taskfiltersReducer } from './tasks/filtersSlice';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
  tasks: tasksReducer,
  // taskFilters: taskfiltersReducer,
});

export default rootReducer;