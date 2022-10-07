import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { editUserData } from "../feature/userSlice";
import { editUserDataInt } from "../models";

/**
 * Function to edit data of the user
 * @function
 * @async
 * @param {editUserDataInt} newDataUser - the new data of user (firstname and lastname)
 * @param {string} token - Token
 * @param {Element | null} editMessage - location of the error message
 * @param {Dispatch<AnyAction>} dispatch - hook useDispatch in const
 * @return {void}
 */
export const editUser = (
  newDataUser: editUserDataInt,
  token: string,
  editMessage: Element | null,
  dispatch: Dispatch<AnyAction>
): void => {
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
