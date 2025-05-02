import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import filterReducer from './filtersSlice';

// файл створення стору

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const store = configureStore({
  reducer: { filters: filterReducer },
});
