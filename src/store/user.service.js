import axios from "axios";
// import { authHeader } from "./auth-header";

const API_URL =
    process.env.NODE_ENV == "development"
        ? process.env.VUE_APP_ROOT_API
        : process.env.VUE_APP_ROOT_PRODUCTION_API;

function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.access) {
        return {
            Authorization: "Bearer " + user.access,
        };
    } else {
        return {};
    }
}

class UserService {
    // BRAND DATA
    // Get Brand Data
    async getBrandData() {
        const response = await axios.get(API_URL + "spa/brand", {
            headers: authHeader(),
        });
        return response.data;
    }

    // Add Brand Data
    async addBrandData(data) {
        const response = await axios.post(API_URL + "spa/brand", data, {
            headers: authHeader(),
        });
        return response.data;
    }

    //Edit Brand Data
    async editBrandData(id, data) {
        const response = await axios.patch(API_URL + "spa/brand/" + id, data, {
            headers: authHeader(),
        });
        return response.data;
    }

    // Get Hotel List
    async getHotelsList() {
        const response = await axios.get(API_URL + "spa/hotel", {
            headers: authHeader(),
        });
        return response.data;
    }

}

export default new UserService();