import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filtersSlice';
import contactsReducer from './contactsSlice';

// файл створення стору

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
