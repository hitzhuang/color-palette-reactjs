import { combineReducers } from "redux";
import newPaletteReducer from "./newPalette/reducer";
import paletteListReducer from "./palettes/reducer";

const rootReducer = combineReducers({
    newPalette: newPaletteReducer,
    palettes: paletteListReducer,
});

export default rootReducer;
