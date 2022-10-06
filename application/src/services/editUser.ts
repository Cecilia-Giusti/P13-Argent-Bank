import axios from "axios";
import { editUserDataInt } from "../models";

type UpdateUserResponse = {
  name: string;
  job: string;
  updatedAt: string;
};

type CreateUserResponse = {
  body: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
};

export const editUser = (
  newDataUser: editUserDataInt,
  token: string,
  setUserData: React.Dispatch<React.SetStateAction<{}>>,
  editMessage: Element | null
) => {
  axios
    .put<UpdateUserResponse>(
      "http://localhost:3001/api/v1/user/profile",
      newDataUser,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
      axios
        .post<CreateUserResponse>(
          "http://localhost:3001/api/v1/user/profile",
          "",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res_1) => {
          setUserData(res_1.data.body);
        })
        .catch((error) => {
          console.log(error);
          if (editMessage) {
            editMessage.innerHTML = `<p class="error">There was a mistake, please try again later. </p>`;
          }
        });
    })
    .catch((error) => {
      console.log(error);
      if (editMessage) {
        editMessage.innerHTML = `<p class="error">There was a mistake, please try again later. </p>`;
      }
    });
};
