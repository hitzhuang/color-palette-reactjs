import types from "./types";

const INIT_STATE = {
    isAuthenticated: false,
    user: {},
};

const userReducer = (state = INIT_STATE, actions) => {
    switch (actions.type) {
        case types.SET_USER:
            return {
                isAuthenticated: Object.keys(actions.user).length,
                user: actions.user,
            };
        default:
            return state;
    }
};

export default userReducer;
