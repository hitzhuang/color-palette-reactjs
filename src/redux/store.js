import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

var store = null;
if (process.env.NODE_ENV !== "development") {
    store = createStore(rootReducer, compose(applyMiddleware(thunk)));
} else {
    store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    // store = createStore(
    //     rootReducer,
    //     compose(applyMiddleware(thunk), composeWithDevTools())
    // );
}

export default store;
