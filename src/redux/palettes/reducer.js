import types from "./types";
import data from "../../data/ColorPalette.data";
import {
    getPalettesFromLocalStorage,
    savePalettesToLocalStorage,
} from "../../utils/paletteHelper";

let palettes = getPalettesFromLocalStorage();
const INIT_STATE = {
    list: palettes ? palettes : data,
};

const paletteListReducer = (state = INIT_STATE, actions) => {
    switch (actions.type) {
        case types.ADD_PALETTE:
            palettes = [...state.list, actions.payload];
            savePalettesToLocalStorage(palettes);
            return {
                ...state,
                list: palettes,
            };
        case types.REMOVE_PALETTE:
            palettes = [...state.list.filter((p) => p.id !== actions.payload)];
            savePalettesToLocalStorage(palettes);
            return {
                ...state,
                list: palettes,
            };
        default:
            return state;
    }
};

export default paletteListReducer;
