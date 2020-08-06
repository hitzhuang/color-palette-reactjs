import types from "./types";
import data from "../../data/ColorPalette.data";
// import {
//     getPalettesFromLocalStorage,
//     savePalettesToLocalStorage,
// } from "../../utils/paletteHelper";
// let palettes = getPalettesFromLocalStorage();

const INIT_STATE = {
    list: data,
};

const paletteListReducer = (state = INIT_STATE, actions) => {
    switch (actions.type) {
        case types.ADD_PALETTE:
            return {
                list: [...state.list, actions.palette],
            };
        case types.REMOVE_PALETTE:
            return {
                list: [...state.list.filter((p) => p.id !== actions.id)],
            };
        case types.SET_PALETTES:
            return {
                list: [...actions.palettes],
            };
        default:
            return state;
    }
};

export default paletteListReducer;
