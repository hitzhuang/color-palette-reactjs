import React from "react";

import Dialog from "@material-ui/core/Dialog";
import NewPaletteAddNameForm from "../NewPaletteAddNameForm";
import NewPaletteAddEmoji from "../NewPaletteAddEmoji";

const NewPaletteSaveDialog = (props) => {
    const { open, next, handleDialogClose, handleCancel, handleSubmit } = props;
    return (
        <Dialog open={open} aria-labelledby="form-dialog-title">
            {next === false ? (
                <NewPaletteAddNameForm handleDialogClose={handleDialogClose} />
            ) : (
                <NewPaletteAddEmoji
                    handleCancel={handleCancel}
                    handleSubmit={handleSubmit}
                />
            )}
        </Dialog>
    );
};

export default NewPaletteSaveDialog;
