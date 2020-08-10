import React from "react";
import { Grid, TextField } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

const Email = ({ color, handleChange, errorMsg }) => {
    return (
        <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
                <EmailIcon style={{ color }} />
            </Grid>
            <Grid item>
                <TextField
                    error={!!errorMsg}
                    autoFocus
                    name="email"
                    label="Email"
                    type="email"
                    helperText={errorMsg}
                    onChange={handleChange}
                />
            </Grid>
        </Grid>
    );
};

export default Email;
