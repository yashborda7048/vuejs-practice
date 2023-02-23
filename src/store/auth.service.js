import axios from "axios";

const API_URL = "https://devkiosk.cloudext.co/api/v1/";

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
