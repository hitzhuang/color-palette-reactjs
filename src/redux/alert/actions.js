import types from "./types";

export const ALERT_DISMISS_DELAY = 3000;

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

export const alertErrorThenRefreshPage = (msg, delay) => (dispach) => {
    dispach(alertError(msg));
    setTimeout(() => window.location.reload(false), delay);
};
