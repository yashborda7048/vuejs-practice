import axios from "axios";

const API_URL =
    process.env.NODE_ENV == "development"
        ? process.env.VUE_APP_ROOT_API
        : process.env.VUE_APP_ROOT_PRODUCTION_API;

function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.access) {
        return {
            Authorization: "Bearer " + user.access
        };
    } else {
        return {};
    }
}

class ApiService {
    // Login Data
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
    // Logout Data
    logout() {
        localStorage.clear();
        localStorage.removeItem("user");
    }

    //Delete Device Data 
    deleteDeviceData(id) {
        return axios
            .delete(API_URL + "device/" + id, { headers: authHeader() })
            .then((response) => {
                return response.data;
            });
    }
}

export default new ApiService();