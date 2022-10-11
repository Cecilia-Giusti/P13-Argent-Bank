import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import connectedReducer from "../slices/connectedSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    connected: connectedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
