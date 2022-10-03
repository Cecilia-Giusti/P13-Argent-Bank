import axios from "axios";

export const connectUser = (data, formMessage, setUserData, setLoggedIn) => {
  return axios
    .post("http://localhost:3001/api/v1/user/login", data)
    .then((res) => {
      let config = {
        method: "post",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
          Authorization: `Bearer ${res.data.body.token}`,
        },
      };

      axios(config)
        .then((res) => {
          setLoggedIn(true);
          setUserData(res.data.body);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((err) => {
      console.log(err);

      if (err.response !== undefined && err.response.data.status === 400) {
        formMessage.innerHTML = `<p class="error"> Username or password is incorrect</p>`;
      } else {
        formMessage.innerHTML = `<p class="error"> Site is being serviced, please try again later</p>`;
      }
    });
};
