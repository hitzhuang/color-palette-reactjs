import types from "./types";

const add = (palette) => ({
    type: types.ADD_PALETTE,
    palette,
});

const remove = (id) => ({
    type: types.REMOVE_PALETTE,
    id,
});

export const setUserPalettes = (palettes) => ({
    type: types.SET_PALETTES,
    palettes,
});

export const addPalette = (palette) => (dispatch) => {
    dispatch(add(palette));
};
export const removePalette = (id) => (dispatch) => {
    dispatch(remove(id));
};
