import React from "react";
import { connect } from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { setPaletteName } from "../../redux/newPalette/actions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class NewPaletteAddNameForm extends React.Component {
    state = {
        name: "",
    };

    componentDidMount() {
        ValidatorForm.addValidationRule("isNameUnique", (value) => {
            if (
                !this.props.list.find(
                    (p) => p.paletteName.toLowerCase() === value.toLowerCase()
                )
            )
                return true;
            return false;
        });
    }
    componentWillUnmount() {
        ValidatorForm.removeValidationRule("isNameUnique");
    }

    handleChange = (e) => this.setState({ name: e.target.value });
    handleNext = () => this.props.setPaletteName(this.state.name);
    render() {
        const { handleDialogClose } = this.props;
        const { name } = this.state;
        return (
            <ValidatorForm onSubmit={this.handleNext}>
                <DialogTitle id="form-dialog-title">
                    Choose a Palette Name
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a unique name for your new palette.
                    </DialogContentText>
                    <TextValidator
                        autoFocus
                        margin="dense"
                        label="Palette Name"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={this.handleChange}
                        validators={["required", "isNameUnique"]}
                        errorMessages={[
                            "This field is required",
                            "Please enter a unique palette name!",
                        ]}
                    />
                </DialogContent>
                <DialogActions style={{ margin: "0px 20px 10px 20px" }}>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={name === ""}
                    >
                        Next
                    </Button>
                </DialogActions>
            </ValidatorForm>
        );
    }
}

const mapStateToProps = (state) => ({
    paletteName: state.newPalette.name,
    list: state.palettes.list,
});

export default connect(mapStateToProps, { setPaletteName })(
    NewPaletteAddNameForm
);
