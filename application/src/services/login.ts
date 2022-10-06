import axios from "axios";
import { loginInt } from "../models";

type CreateUserResponse = {
  body: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
};

export const connectUser = async (
  data: loginInt,
  formMessage: Element | null,
  setUserData: React.Dispatch<React.SetStateAction<{}>>,
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setToken: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      data
    );
    setToken(res.data.body.token);

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
        setLoggedIn(true);
        setUserData(res_1.data.body);
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
