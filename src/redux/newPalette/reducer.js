import types from "./types";

const INIT_STATE = {
    name: "",
    emoji: "",
    colors: [],
};

const newPaletteReducer = (state = INIT_STATE, actions) => {
    switch (actions.type) {
        case types.SET_NAME:
            return {
                ...state,
                name: actions.payload,
            };
        case types.SET_EMOJI:
            return {
                ...state,
                emoji: actions.payload,
            };
        case types.ADD_COLOR:
            return {
                ...state,
                colors: [...state.colors, actions.payload],
            };
        case types.REMOVE_COLOR:
            return {
                ...state,
                colors: state.colors.filter((c) => c.name !== actions.payload),
            };
        case types.SORT:
            return {
                ...state,
                colors: [...actions.payload],
            };
        case types.CLEAR:
            return {
                ...INIT_STATE,
            };
        default:
            return state;
    }
};

export default newPaletteReducer;
