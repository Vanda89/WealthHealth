import {
  configureStore,
  combineReducers,
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice.js'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { PERSIST } from 'redux-persist/es/constants'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  serialize: true,
}

const rootReducer = combineReducers({
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

/**
 * Create a Redux store with Redux Toolkit.
 * The persistent reducer is used to maintain data even after a page reload.
 * Default middlewares are applied, with serialization control disabled.
 */
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
})

const persistor = persistStore(store)

export { store, persistor }
