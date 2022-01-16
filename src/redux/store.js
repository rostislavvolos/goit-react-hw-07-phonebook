import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/PhonebookSlicer";



const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV !== "production",
});

export { store };