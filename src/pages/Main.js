import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/Main.styles";
import PaletteList from "../components/PaletteList";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import LoginDialog from "../components/LoginDialog";

const Main = ({ classes, isAuthenticated }) => {
    const [goLogin, setGoLogin] = useState(false);
    const closeLoginDialog = () => setGoLogin(false);

    const renderCreatePaletteButton = () => (
        <div className={classes.link}>
            <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: "5px" }}
                className={classes.yellowBtn}
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
            <LoginDialog open={goLogin} handleDialogClose={closeLoginDialog} />
        </Container>
    );
};

export default withStyles(styles)(Main);
