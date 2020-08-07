import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/Main.styles";
import PaletteList from "../components/PaletteList";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import LoginDialog from "../components/Dialog/LoginDialog";
import ConfirmDialog from "../components/Dialog/ConfirmDialog";
import { logout } from "../redux/user/actions";
import RegisterDialog from "../components/Dialog/RegisterDialog";
import AlertMessage from "../components/AlertMessage";

const Main = ({ classes, isAuthenticated, logout }) => {
    const [goRegister, setGoRegister] = useState(false);
    const closeRegisterDialog = () => setGoRegister(false);
    const [goLogin, setGoLogin] = useState(false);
    const closeLoginDialog = () => setGoLogin(false);
    const [goLogout, setGoLogout] = useState(false);
    const closeLogoutDialog = () => setGoLogout(false);
    const handleLogout = () => {
        logout();
        closeLogoutDialog();
    };

    const renderCreatePaletteButton = () => (
        <div className={classes.link}>
            <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: "5px" }}
                className={classes.yellowBtn}
                onClick={() => setGoLogout(true)}
            >
                Logout
            </Button>
            <Link to="/palette/new">
                <Button variant="contained" color="secondary">
                    Create Palette
                </Button>
            </Link>
        </div>
    );
    const renderLoginAndRegisterButtons = () => (
        <div className={classes.link}>
            <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: "5px" }}
                onClick={() => setGoRegister(true)}
            >
                register
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => setGoLogin(true)}
            >
                login
            </Button>
        </div>
    );
    return (
        <Container className={classes.root} maxWidth={false}>
            <Container className={classes.content} maxWidth="md">
                <header className={classes.nav}>
                    <div className={classes.logo}>Color Palette</div>
                    {isAuthenticated
                        ? renderCreatePaletteButton()
                        : renderLoginAndRegisterButtons()}
                </header>
                <PaletteList />
            </Container>
            <ConfirmDialog
                title="Are you sure to log out?"
                open={goLogout}
                handleCancel={closeLogoutDialog}
                handleConfirm={handleLogout}
            />
            <LoginDialog open={goLogin} closeDialog={closeLoginDialog} />
            <RegisterDialog
                open={goRegister}
                closeDialog={closeRegisterDialog}
            />
            <AlertMessage />
        </Container>
    );
};

export default withStyles(styles)(connect(null, { logout })(Main));
