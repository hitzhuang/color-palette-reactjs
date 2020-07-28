import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const NewPaletteAppBar = (props) => {
    const { classes, open, handleDrawerOpen, handleDialogOpen } = props;
    return (
        <AppBar
            color="transparent"
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Create a palette
                </Typography>
                <div className={classes.nav}>
                    <Link to={{ pathname: "/", params: { back: true } }}>
                        <Button variant="contained" color="secondary">
                            Back
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleDialogOpen}
                    >
                        Save
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NewPaletteAppBar;
