import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import horsesReducer from "../features/horses/horsesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    horses: horsesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
