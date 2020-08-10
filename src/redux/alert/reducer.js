import types from "./types";

const INIT_STATE = {
    open: false,
    type: "",
    message: "",
};

const alertReducer = (state = INIT_STATE, actions) => {
    switch (actions.type) {
        case types.ALERT_SUCCESS:
        case types.ALERT_ERROR:
            return {
                open: true,
                type: actions.type,
                message: actions.msg,
            };
        case types.ALERT_DISMISS:
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
};

export default alertReducer;
