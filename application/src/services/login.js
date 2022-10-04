import axios from "axios";

export const connectUser = async (
  data,
  formMessage,
  setUserData,
  setLoggedIn,
  setToken
) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      data
    );
    setToken(res.data.body.token);
    let config = {
      method: "post",
      url: "http://localhost:3001/api/v1/user/profile",
      headers: {
        Authorization: `Bearer ${res.data.body.token}`,
      },
    };

    axios(config)
      .then((res_1) => {
        setLoggedIn(true);
        setUserData(res_1.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);

    if (err.response !== undefined && err.response.data.status === 400) {
      formMessage.innerHTML = `<p class="error"> Username or password is incorrect</p>`;
    } else {
      formMessage.innerHTML = `<p class="error"> Site is being serviced, please try again later</p>`;
    }
  }
};
