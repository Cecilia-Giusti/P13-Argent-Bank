import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import connectedReducer from "../feature/connectedSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    connected: connectedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
