import jwtDecoder from "jwt-decode";
import { setAuthToken } from "../service/axios";
const JWT_TOKEN = "jwtToken";
const JWT_TIMESTAMP = "jwtTimestamp";

export const getJwtTokenFromLocalStorage = () => {
    return localStorage.getItem(JWT_TOKEN);
};

export const setJwtTokenToLocalStorage = (token) => {
    localStorage.setItem(JWT_TOKEN, token);
    localStorage.setItem(JWT_TIMESTAMP, Math.floor(Date.now() / 1000));
};

export const initUser = () => {
    let user = {};
    let token = getJwtTokenFromLocalStorage();
    if (token) {
        let timestamp = parseInt(localStorage.getItem(JWT_TIMESTAMP));
        let decoded = jwtDecoder(token);
        let { id, username, iat, exp } = decoded;
        let currentTime = Math.floor(Date.now() / 1000);
        if (exp >= iat + (currentTime - timestamp)) {
            user = { id, username };
            setAuthToken(token);
        }
    }
    return user;
};
