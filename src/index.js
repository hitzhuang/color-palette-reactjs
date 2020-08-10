import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";

import { initUser } from "./utils/userHelper";
import { setCurrentUser, logout } from "./redux/user/actions";
import { reloadPalettes, setUserPalettes } from "./redux/palettes/actions";

// Reload user if jwt token exists and is not expired.

let user = initUser();
if (user) {
    store.dispatch(setUserPalettes([]));
    store.dispatch(setCurrentUser(user));
    reloadPalettes()
        .then((res) => store.dispatch(setUserPalettes(res.palettes)))
        .catch(() => store.dispatch(logout()));
} else {
    store.dispatch(logout());
}

// render app
ReactDOM.render(
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
