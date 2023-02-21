import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favsReducer from "../reducers/favourites";
import jobsReducer from "../reducers/jobs";
import { encryptTransform } from "redux-persist-transform-encrypt";

//do una configurazione alla persistenza (cosa gestire e dove renderlo persistente)
const persistConfig = {
   key: `root`,
   storage: storage,
   whitelist: ["favs"],
   transforms: [encryptTransform({ secretKey: process.env.REACT_APP_PERSISTKEY })]
}

const rootReducer = combineReducers({
   favs: favsReducer,
   jobs: jobsReducer,
});

//rendo persistente (config, reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false
      }),
})

export const persistor = persistStore(store)
