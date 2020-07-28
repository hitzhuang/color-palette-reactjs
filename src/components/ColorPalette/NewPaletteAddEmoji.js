import React from "react";
import { connect } from "react-redux";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { setPaletteEmoji } from "../../redux/newPalette/actions";

const NewPaletteAddEmoji = (props) => {
    const { emoji, setPaletteEmoji, handleSubmit, handleCancel } = props;
    const handleSelect = (e) => setPaletteEmoji(e.native);
    return (
        <div>
            <DialogTitle id="form-dialog-title">Choose a Emoji</DialogTitle>
            <DialogContent>
                <Picker set="apple" onSelect={handleSelect} />
            </DialogContent>
            <DialogActions style={{ margin: "0px 20px 10px 20px" }}>
                <Button color="primary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={emoji === ""}
                >
                    Done
                </Button>
            </DialogActions>
        </div>
    );
};

const mapStateToProps = (state) => ({
    emoji: state.newPalette.emoji,
});

export default connect(mapStateToProps, { setPaletteEmoji })(
    NewPaletteAddEmoji
);
