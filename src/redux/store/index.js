import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favsReducer from "../reducers/favourites";
import jobsReducer from "../reducers/jobs";

const rootReducer = combineReducers({
   favs: favsReducer,
   jobs: jobsReducer,
});


const store = configureStore({
   reducer: rootReducer,
})

export default store;