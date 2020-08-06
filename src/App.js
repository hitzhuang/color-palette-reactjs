import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Main from "./pages/Main";
import Palette from "./pages/Palette";
import SingleColorPalette from "./pages/SingleColorPalette";
import NewPaletteMain from "./pages/NewPaletteMain";
import AuthPage from "./pages/AuthPage";

const App = (props) => {
    const { location, history, isAuthenticated } = props;
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
                        render={(props) => (
                            <AuthPage
                                isAuthenticated={isAuthenticated}
                                history={history}
                            >
                                <NewPaletteMain {...props} />
                            </AuthPage>
                        )}
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
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Main isAuthenticated={isAuthenticated} />
                        )}
                    />
                    <Redirect to="/" />
                </Switch>
            </CSSTransition>
        </SwitchTransition>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(App));
