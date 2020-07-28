import types from "./types";

export const setPaletteName = (name) => ({
    type: types.SET_NAME,
    payload: name,
});

export const setPaletteEmoji = (emoji) => ({
    type: types.SET_EMOJI,
    payload: emoji,
});

export const addPaletteColor = (color) => ({
    type: types.ADD_COLOR,
    payload: color,
});

export const removePaletteColor = (name) => ({
    type: types.REMOVE_COLOR,
    payload: name,
});

export const clearPalette = () => ({
    type: types.CLEAR,
});

export const sortPaletteColors = (colors) => ({
    type: types.SORT,
    payload: colors,
});
