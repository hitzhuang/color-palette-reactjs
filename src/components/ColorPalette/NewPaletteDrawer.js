import React, { useState } from "react";
import { connect } from "react-redux";
import { SketchPicker } from "react-color";

import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button } from "@material-ui/core";
import NewPaletteAddColorForm from "./NewPaletteAddColorForm";
import {
    getAllColorsFromPalettes,
    getRandomColor,
} from "../../utils/ColorPalette/paletteHelper";

import { clearPalette, addPaletteColor } from "../../redux/newPalette/actions";
import { useTheme } from "@material-ui/core/styles";

const NewPaletteDrawer = (props) => {
    const theme = useTheme();
    const [color, setColor] = useState("#417769");
    const {
        classes,
        list,
        colors,
        open,
        handleDrawerClose,
        clearPalette,
        addPaletteColor,
    } = props;

    let copies = getAllColorsFromPalettes(list.slice(0, list.length));

    const addRandomColor = () => {
        if (copies.length === 0) {
            console.log("no more random colors.");
            return;
        }

        const rc = getRandomColor(copies);
        const getNotUnique = (c) =>
            c.name === rc.name ||
            c.color.toLowerCase() === rc.color.toLowerCase();
        const getUnique = (c) =>
            c.name !== rc.name &&
            c.color.toLowerCase() !== rc.color.toLowerCase();

        if (colors.findIndex(getNotUnique) !== -1) {
            copies = copies.filter(getUnique);
            console.log("find duplicated");
            addRandomColor();
        } else {
            console.log("unique");
            addPaletteColor(rc);
        }
    };

    const disabled = copies.length === 0 || colors.length >= 20;
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            // variant="permanent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <div className={classes.drawerBody}>
                <Typography gutterBottom variant="h6">
                    Design your palette
                </Typography>
                <SketchPicker
                    Chrome
                    color={color}
                    onChangeComplete={(e) => setColor(e.hex)}
                />
                <div className="btns">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={clearPalette}
                    >
                        Clear Palette
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={addRandomColor}
                        disabled={disabled}
                    >
                        Random Color
                    </Button>
                </div>
                <NewPaletteAddColorForm color={color} />
            </div>
        </Drawer>
    );
};

const mapStateToProps = (state) => ({
    colors: state.newPalette.colors,
    list: state.palettes.list,
});

export default connect(mapStateToProps, { clearPalette, addPaletteColor })(
    NewPaletteDrawer
);
