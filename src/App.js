import React from "react";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Main from "./components/ColorPalette/Main";
import Palette from "./components/ColorPalette/Palette";
import SingleColorPalette from "./components/ColorPalette/SingleColorPalette";
import NewPaletteMain from "./components/ColorPalette/NewPaletteMain";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const App = (props) => {
    const { location, history } = props;
    const { params } = props.location;
    const slideEffect =
        (params && params.back) || (history && history.action === "POP")
            ? "slide-out"
            : "slide-in";
    return (
        <SwitchTransition>
            <CSSTransition
                timeout={300}
                classNames={slideEffect}
                key={location.key}
            >
                <Switch location={location}>
                    <Route
                        exact
                        path="/palette/new"
                        render={(props) => <NewPaletteMain {...props} />}
                    />
                    <Route
                        exact
                        path="/palette/:id"
                        render={(props) => <Palette {...props} />}
                    />
                    <Route
                        exact
                        path="/palette/:id/:colorId"
                        render={(props) => <SingleColorPalette {...props} />}
                    />
                    <Route exact path="/" render={() => <Main />} />
                    <Redirect to="/" />
                </Switch>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default withRouter(App);
