import React from "react";
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

const ConfirmDialog = ({ open, handleCancel, handleConfirm }) => {
    return (
        <Dialog aria-labelledby="delete-dialog-title" open={open}>
            <DialogTitle id="delete-dialog-title">
                Delete This Palette?
            </DialogTitle>
            <Divider />
            <List>
                <ListItem button onClick={handleConfirm}>
                    <ListItemAvatar>
                        <Avatar
                            style={{
                                backgroundColor: blue[100],
                                color: blue[600],
                            }}
                        >
                            <CheckIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Delete" />
                </ListItem>
                <ListItem button onClick={handleCancel}>
                    <ListItemAvatar>
                        <Avatar
                            style={{
                                backgroundColor: red[100],
                                color: red[600],
                            }}
                        >
                            <CloseIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Cancel" />
                </ListItem>
            </List>
        </Dialog>
    );
};

export default ConfirmDialog;
