import React from "react";
import { Grid, TextField } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

const Password = ({ color, handleChange, errorMsg }) => {
    return (
        <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
                <LockIcon style={{ color }} />
            </Grid>
            <Grid item>
                <TextField
                    error={!!errorMsg}
                    name="password"
                    label="Password"
                    type="password"
                    helperText={errorMsg}
                    onChange={handleChange}
                />
            </Grid>
        </Grid>
    );
};

export default Password;
