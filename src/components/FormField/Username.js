import React from "react";
import { Grid, TextField } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Username = ({ color, handleChange, errorMsg }) => {
    return (
        <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
                <AccountCircleIcon style={{ color }} />
            </Grid>
            <Grid item>
                <TextField
                    error={!!errorMsg}
                    name="username"
                    label="Username"
                    helperText={errorMsg}
                    onChange={handleChange}
                />
            </Grid>
        </Grid>
    );
};

export default Username;
