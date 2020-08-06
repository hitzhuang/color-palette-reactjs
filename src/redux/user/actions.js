import types from "./types";

export const setCurrentUser = ({ user }) => ({
    type: types.SET_USER,
    user,
});
