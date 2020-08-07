import React from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { dismissAlert } from "../redux/alert/actions";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const AlertMessage = ({ alert, dismissAlert }) => {
    const handleClose = () => dismissAlert();
    return (
        <Snackbar
            open={alert.open}
            autoHideDuration={3000}
            onClose={handleClose}
            onEmptied={handleClose}
        >
            <Alert onClose={handleClose} severity={alert.type}>
                {alert.message}
            </Alert>
        </Snackbar>
    );
};

const mapStateToProps = (state) => ({
    alert: state.alert,
});

export default connect(mapStateToProps, { dismissAlert })(AlertMessage);
