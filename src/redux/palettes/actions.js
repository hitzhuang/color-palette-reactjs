import types from "./types";

export const addPalette = (palette) => ({
    type: types.ADD_PALETTE,
    payload: palette,
});

export const removePalette = (id) => ({
    type: types.REMOVE_PALETTE,
    payload: id,
});
