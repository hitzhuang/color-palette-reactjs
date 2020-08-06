import { combineReducers } from "redux";
import newPaletteReducer from "./newPalette/reducer";
import paletteListReducer from "./palettes/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    newPalette: newPaletteReducer,
    palettes: paletteListReducer,
    user: userReducer,
});

export default rootReducer;
