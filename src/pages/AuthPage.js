import React, { Component } from "react";

class AuthPage extends Component {
    constructor(props) {
        super(props);
        if (!this.props.isAuthenticated) {
            this.props.history.push("/");
        }
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
