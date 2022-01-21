import axios from "axios";

const API_URL = `${process.env.REACT_APP_BASE_URL}`;

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "/login", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("username", JSON.stringify(response.data.username));
          localStorage.setItem("email", JSON.stringify(response.data.email));
          localStorage.setItem("roles", JSON.stringify(response.data.roles));
          localStorage.setItem("id", JSON.stringify(response.data.id));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
