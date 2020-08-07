import axios from "axios";
const API_URL = "http://localhost:3000/api";

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const apiCall = (method, path, data) => {
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](API_URL + path, data)
            .then((res) => {
                return resolve(res.data);
            })
            .catch((err) => {
                if (err.response) return reject(err.response);
                else {
                    console.log(err);
                    return reject({
                        status: 500,
                        data: { message: "Unknown." },
                    });
                }
            });
    });
};
