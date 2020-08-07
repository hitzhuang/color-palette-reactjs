import types from "./types";

export const alertSuccess = (msg) => ({
    type: types.ALERT_SUCCESS,
    msg,
});

export const alertError = (msg) => ({
    type: types.ALERT_ERROR,
    msg,
});

export const dismissAlert = () => ({
    type: types.ALERT_DISMISS,
});
