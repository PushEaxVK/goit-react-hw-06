import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './filtersSlice';
import contactsReducer from './contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// файл створення стору

const persistConfig = {
  key: 'saved-contacts',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
