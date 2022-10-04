import axios from "axios";

export const editUser = (newDataUser, token, setUserData, editMessage) => {
  let config = {
    method: "put",
    url: "http://localhost:3001/api/v1/user/profile",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: newDataUser,
  };

  axios(config)
    .then((response) => {
      let config = {
        method: "post",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
        .then((res_1) => {
          setUserData(res_1.data.body);
        })
        .catch((error) => {
          console.log(error);
          editMessage.innerHTML = `<p class="error">There was a mistake, please try again later. </p>`;
        });
    })
    .catch((error) => {
      console.log(error);
      editMessage.innerHTML = `<p class="error">There was a mistake, please try again later. </p>`;
    });
};
