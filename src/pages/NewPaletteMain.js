import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import arrayMove from "array-move";
import CssBaseline from "@material-ui/core/CssBaseline";
import NewPaletteAppBar from "../components/NewPaletteAppBar";
import NewPaletteDrawer from "../components/NewPaletteDrawer";
import NewPaletteSaveDialog from "../components/Dialog/NewPaletteSaveDialog";
import SortableColorBoxList from "../components/SortableColorBoxList";
import AlertMessage from "../components/AlertMessage";
import { addPalette } from "../redux/palettes/actions";
import useStyles from "../styles/NewPaletteMain.styles";
import {
    alertError,
    alertErrorThenRefreshPage,
    ALERT_DISMISS_DELAY,
} from "../redux/alert/actions";
import {
    setPaletteName,
    setPaletteEmoji,
    sortPaletteColors,
} from "../redux/newPalette/actions";

const NewPaletteMain = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => setOpenDrawer(true);
    const handleDrawerClose = () => setOpenDrawer(false);
    const [openDialog, setOpenDialog] = useState(false);
    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);
    const {
        name,
        emoji,
        colors,
        setPaletteName,
        setPaletteEmoji,
        addPalette,
        sortPaletteColors,
        alertError,
        history,
        alertErrorThenRefreshPage,
    } = props;

    const reset = () => {
        handleDialogClose();
        setTimeout(() => {
            setPaletteName("");
            setPaletteEmoji("");
        }, 500);
    };

    const handleSubmit = () => {
        reset();
        addPalette({
            name,
            emoji,
            colors,
        })
            .then(() => history.push("/"))
            .catch((e) => {
                if (e.status === 401) {
                    alertErrorThenRefreshPage(
                        e.data.error.message,
                        ALERT_DISMISS_DELAY
                    );
                } else {
                    alertError(e.data.error.message);
                }
            });
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        sortPaletteColors(arrayMove(colors, oldIndex, newIndex));
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NewPaletteAppBar
                classes={classes}
                open={openDrawer}
                handleDrawerOpen={handleDrawerOpen}
                handleDialogOpen={handleDialogOpen}
            />
            <NewPaletteDrawer
                classes={classes}
                open={openDrawer}
                handleDrawerClose={handleDrawerClose}
            />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: openDrawer,
                })}
            >
                <div className={classes.drawerHeader} />
                {/* color boxes */}
                <SortableColorBoxList
                    axis="xy"
                    classes={classes}
                    colors={colors}
                    onSortEnd={onSortEnd}
                />
            </main>
            <NewPaletteSaveDialog
                open={openDialog}
                next={name !== ""}
                handleDialogClose={handleDialogClose}
                handleCancel={reset}
                handleSubmit={handleSubmit}
            />
            <AlertMessage />
        </div>
    );
};

const mapStateToProps = (state) => ({
    name: state.newPalette.name,
    emoji: state.newPalette.emoji,
    colors: state.newPalette.colors,
});

export default withRouter(
    connect(mapStateToProps, {
        setPaletteName,
        setPaletteEmoji,
        addPalette,
        sortPaletteColors,
        alertError,
        alertErrorThenRefreshPage,
    })(NewPaletteMain)
);
