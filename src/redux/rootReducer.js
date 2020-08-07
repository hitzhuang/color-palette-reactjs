import { combineReducers } from "redux";
import newPaletteReducer from "./newPalette/reducer";
import paletteListReducer from "./palettes/reducer";
import userReducer from "./user/reducer";
import alertReducer from "./alert/reducer";

const rootReducer = combineReducers({
    newPalette: newPaletteReducer,
    palettes: paletteListReducer,
    user: userReducer,
    alert: alertReducer,
});

export default rootReducer;
