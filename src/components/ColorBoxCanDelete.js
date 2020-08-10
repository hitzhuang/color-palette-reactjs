import React from "react";
import { connect } from "react-redux";
import chroma from "chroma-js";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { removePaletteColor } from "../redux/newPalette/actions";
import { SortableElement } from "react-sortable-hoc";

const styles = (theme) => ({
    root: {
        width: "20%",
        height: "25%",
        margin: "0px auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-5px",
        backgroundColor: ({ backgroundColor }) => backgroundColor,
        "&:hover svg": {
            transform: "scale(2)",
            transformOrigin: "50% 50%",
            opacity: "0.7",
            cursor: "pointer",
        },
        [theme.breakpoints.down("sm")]: {
            width: "50%",
            height: "10%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "5%",
        },
    },
    name: {
        position: "absolute",
        left: "20px",
        bottom: "20px",
        fontSize: "12pt",
        color: ({ backgroundColor }) => {
            return chroma(backgroundColor).luminance() < 0.25
                ? "white"
                : "black";
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
            bottom: "5px",
        },
    },
    icon: {
        position: "absolute",
        right: "20px",
        bottom: "20px",
        fontSize: "16pt",
        color: ({ backgroundColor }) => {
            return chroma(backgroundColor).luminance() < 0.25
                ? "white"
                : "black";
        },
        transition: "all 0.2s linear",
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
            bottom: "5px",
        },
    },
});

const ColorBoxCanDelete = ({ classes, name, removePaletteColor }) => {
    const handleDelete = () => removePaletteColor(name);
    return (
        <div className={classes.root}>
            <div className={classes.name}>{name}</div>
            <DeleteIcon className={classes.icon} onClick={handleDelete} />
        </div>
    );
};

export default withStyles(styles)(
    connect(null, { removePaletteColor })(SortableElement(ColorBoxCanDelete))
);
