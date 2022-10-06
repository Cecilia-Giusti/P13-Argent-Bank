import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { getToken, setIsConnected } from "../feature/connectedSlice";
import { setUserData } from "../feature/userSlice";
import { loginInt, userDataInt } from "../models";

type CreateUserResponse = {
  body: userDataInt;
};

export const connectUser = async (
  data: loginInt,
  formMessage: Element | null,
  dispatch: Dispatch<AnyAction>
) => {
  try {
    await axios
      .post("http://localhost:3001/api/v1/user/login", data)
      .then((res) => {
        dispatch(getToken(res.data.body.token));

        axios
          .post<CreateUserResponse>(
            "http://localhost:3001/api/v1/user/profile",
            "",
            {
              headers: {
                Authorization: `Bearer ${res.data.body.token}`,
              },
            }
          )
          .then((res_1) => {
            dispatch(setIsConnected(true));
            dispatch(setUserData(res_1.data.body));
          });
      });
  } catch (err: any) {
    console.log(err);

    if (
      err.response !== undefined &&
      err.response.data.status === 400 &&
      formMessage
    ) {
      formMessage.innerHTML = `<p class="error"> Username or password is incorrect</p>`;
    } else if (formMessage) {
      formMessage.innerHTML = `<p class="error"> Site is being serviced, please try again later</p>`;
    }
  }
};
