import axios from "axios";

export const connectUser = (data, formMessage) => {
  return axios
    .post("http://localhost:3001/api/v1/user/login", data)
    .then((res) => {
      console.log(res.status);
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
