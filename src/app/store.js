import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiSlice from "../features/api/apiSlice";
import favouriteReducer from "../features/favourite/favouriteSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [apiSlice.reducerPath],
};

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  favourite: favouriteReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

const persistor = persistStore(store);

export default persistor;
