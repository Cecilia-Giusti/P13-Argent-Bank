import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { editUserData } from "../feature/userSlice";
import { editUserDataInt } from "../models";

export const editUser = (
  newDataUser: editUserDataInt,
  token: string,
  editMessage: Element | null,
  dispatch: Dispatch<AnyAction>
) => {
  axios
    .put("http://localhost:3001/api/v1/user/profile", newDataUser, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      dispatch(editUserData(newDataUser));
    })
    .catch((error) => {
      console.log(error);
      if (editMessage) {
        editMessage.innerHTML = `<p class="error">There was a mistake, please try again later. </p>`;
      }
    });
};
