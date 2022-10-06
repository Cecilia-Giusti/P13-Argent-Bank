import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userDataInt } from "../models";

interface UserSlice {
  user: userDataInt | null;
}

const initialState: UserSlice = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<userDataInt>) => {
      state.user = action.payload;
    },
    resetUserData: (state, action: PayloadAction<null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserData, resetUserData } = userSlice.actions;
export default userSlice.reducer;
