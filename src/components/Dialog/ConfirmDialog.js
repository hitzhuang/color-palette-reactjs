import React from "react";
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

const ConfirmDialog = ({ open, title, handleCancel, handleConfirm }) => {
    return (
        <Dialog aria-labelledby="confirm-dialog-title" open={open}>
            <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
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
                    <ListItemText primary="ok" />
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
            <br />
        </Dialog>
    );
};

export default ConfirmDialog;
