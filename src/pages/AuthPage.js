import React, { Component } from "react";

class AuthPage extends Component {
    componentWillMount() {
        this.props.history.push("/");
    }
    render() {
        if (this.props.isAuthenticated) {
            return <>{this.props.children}</>;
        } else {
            return <></>;
        }
    }
}

export default AuthPage;
