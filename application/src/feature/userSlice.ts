import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { editUserDataInt, userDataInt } from "../models";

interface UserSlice {
  user: userDataInt | null;
  isEdit: boolean;
}

const initialState: UserSlice = {
  user: null,
  isEdit: false,
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
    editUserData: (state, action: PayloadAction<editUserDataInt>) => {
      state.user = {
        ...state.user,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    },
    isEditing: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload;
    },
  },
});

export const { setUserData, resetUserData, editUserData, isEditing } =
  userSlice.actions;
export default userSlice.reducer;
