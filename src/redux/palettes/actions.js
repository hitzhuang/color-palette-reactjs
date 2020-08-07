import types from "./types";
import { apiCall } from "../../service/axios";

const add = (palette) => ({
    type: types.ADD_PALETTE,
    palette,
});

const remove = (id) => ({
    type: types.REMOVE_PALETTE,
    id,
});

export const resetPalettes = () => ({
    type: types.RESET_PALETTES,
});

export const setUserPalettes = (palettes) => ({
    type: types.SET_PALETTES,
    palettes,
});

export const addPalette = (palette) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return apiCall("post", "/palettes", palette)
            .then((res) => {
                dispatch(add(res.palette));
                resolve();
            })
            .catch((error) => reject(error));
    });
};

export const removePalette = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return apiCall("delete", "/palettes/" + id)
            .then((res) => {
                dispatch(remove(res.palette.id));
                resolve();
            })
            .catch((error) => reject(error));
    });
};

export const reloadPalettes = () => {
    return new Promise((resolve, reject) => {
        return apiCall("get", "/palettes")
            .then((res) => {
                resolve(res);
            })
            .catch((error) => reject(error));
    });
};
