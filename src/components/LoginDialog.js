import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core";

import { withStyles } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";
import Email from "./FormField/Email";
import Password from "./FormField/Password";

import { login } from "../redux/user/actions";

const styles = {
    title: {
        backgroundColor: "#3f51b5",
        marginBottom: "15px",
        color: "white",
    },
};

class LoginDialog extends Component {
    state = {
        email: "",
        password: "",
        errors: {},
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ errors: {} }, () => {
            this.props
                .login(this.state.email, this.state.password)
                .then(() => {
                    this.props.handleDialogClose();
                })
                .catch((e) => {
                    if (e.error.errors) {
                        this.setState({ errors: e.error.errors });
                    }
                });
        });
    };
    render() {
        const { classes, open, handleDialogClose } = this.props;
        const { errors, email, password } = this.state;
        return (
            <Dialog aria-labelledby="login-dialog-title" open={open}>
                <form onSubmit={this.handleSubmit}>
                    <DialogTitle
                        id="login-dialog-title"
                        className={classes.title}
                    >
                        Login to create palettes
                    </DialogTitle>
                    <DialogContent>
                        <Email
                            color={grey[500]}
                            handleChange={this.handleChange}
                            value={email}
                            errorMsg={errors.email}
                        />
                        <Password
                            color={grey[500]}
                            handleChange={this.handleChange}
                            value={password}
                            errorMsg={errors.password}
                        />
                    </DialogContent>
                    <DialogActions style={{ margin: "10px 20px 20px 20px" }}>
                        <Button onClick={handleDialogClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }
}

export default withStyles(styles)(connect(null, { login })(LoginDialog));
