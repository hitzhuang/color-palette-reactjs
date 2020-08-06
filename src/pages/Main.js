import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/Main.styles";
import PaletteList from "../components/PaletteList";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const Main = ({ classes, isAuthenticated }) => {
    const renderCreatePaletteButton = () => (
        <Link to="/palette/new" className={classes.link}>
            <Button variant="contained" color="secondary">
                Create Palette
            </Button>
        </Link>
    );
    const renderLoginAndRegisterButtons = () => (
        <div className={classes.link}>
            <Link to="/register">
                <Button variant="contained" color="secondary">
                    register
                </Button>
            </Link>
            <Link to="/login" style={{ marginLeft: "5px" }}>
                <Button variant="contained" color="secondary">
                    login
                </Button>
            </Link>
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
        </Container>
    );
};

export default withStyles(styles)(Main);
