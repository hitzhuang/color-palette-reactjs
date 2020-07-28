import React, { useState } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import arrayMove from "array-move";
import CssBaseline from "@material-ui/core/CssBaseline";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import NewPaletteAppBar from "./NewPaletteAppBar";
import NewPaletteDrawer from "./NewPaletteDrawer";
import NewPaletteSaveDialog from "./NewPaletteSaveDialog";

import {
    setPaletteName,
    setPaletteEmoji,
    sortPaletteColors,
} from "../../redux/newPalette/actions";
import { addPalette } from "../../redux/palettes/actions";
import useStyles from "../../styles/ColorPalette/NewPaletteMain.styles";
import SortableColorBoxList from "./SortableColorBoxList";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const NewPaletteMain = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => setOpenDrawer(true);
    const handleDrawerClose = () => setOpenDrawer(false);
    const [openDialog, setOpenDialog] = useState(false);
    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);
    const [openAlert, setOpenAlert] = useState(false);
    const handleAlertOpen = () => setOpenAlert(true);
    const handleAlertClose = () => setOpenAlert(false);

    const {
        name,
        emoji,
        colors,
        setPaletteName,
        setPaletteEmoji,
        addPalette,
        sortPaletteColors,
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
            paletteName: name,
            id: name.replace(/\s+/g, "-"),
            emoji,
            colors,
        });
        handleAlertOpen();
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
            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleAlertClose}
            >
                <Alert onClose={handleAlertClose} severity="success">
                    Your new palette is saved!
                </Alert>
            </Snackbar>
        </div>
    );
};

const mapStateToProps = (state) => ({
    name: state.newPalette.name,
    emoji: state.newPalette.emoji,
    colors: state.newPalette.colors,
});

export default connect(mapStateToProps, {
    setPaletteName,
    setPaletteEmoji,
    addPalette,
    sortPaletteColors,
})(NewPaletteMain);
