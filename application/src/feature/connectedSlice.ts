import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConnectedSlice {
  isConnected: boolean;
  token: string | null;
}

const initialState: ConnectedSlice = {
  isConnected: false,
  token: null,
};

export const connectedSlice = createSlice({
  name: "connected",
  initialState,
  reducers: {
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    getToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { setIsConnected, getToken } = connectedSlice.actions;
export default connectedSlice.reducer;
