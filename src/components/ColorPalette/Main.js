import React from "react";
import { Link } from "react-router-dom";

import PaletteList from "./PaletteList";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import styles from "../../styles/ColorPalette/Main.styles";
import { withStyles } from "@material-ui/styles";

const Main = ({ classes }) => {
    return (
        <Container className={classes.root} maxWidth={false}>
            <Container className={classes.content} maxWidth="md">
                <header className={classes.nav}>
                    <div className={classes.logo}>Color Palette</div>
                    <Link to="/palette/new" className={classes.link}>
                        <Button variant="contained" color="secondary">
                            Create Palette
                        </Button>
                    </Link>
                </header>
                <PaletteList />
            </Container>
        </Container>
    );
};

export default withStyles(styles)(Main);
