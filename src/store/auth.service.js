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
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }
}

export default new AuthService();
