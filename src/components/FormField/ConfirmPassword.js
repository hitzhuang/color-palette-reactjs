import React from "react";
import { Grid, TextField } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ConfirmPassword = ({ color, handleChange, errorMsg }) => {
    return (
        <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
                <CheckCircleIcon style={{ color }} />
            </Grid>
            <Grid item>
                <TextField
                    error={!!errorMsg}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    helperText={errorMsg}
                    onChange={handleChange}
                />
            </Grid>
        </Grid>
    );
};

export default ConfirmPassword;
