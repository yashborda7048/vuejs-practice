import axios from "axios";

const API_URL =
  process.env.NODE_ENV == "development"
    ? process.env.VUE_APP_ROOT_API
    : process.env.VUE_APP_ROOT_PRODUCTION_API;

class AuthService {
  login(user) {
    return axios 
      .post(API_URL + "auth/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.access) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.clear();
    localStorage.removeItem("user");
  }
}

export default new AuthService();
