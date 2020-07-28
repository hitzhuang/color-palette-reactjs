import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";
import { addPaletteColor } from "../../redux/newPalette/actions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        "& button": {
            marginTop: "10px",
            width: "100%",
            height: "70px",
            color: (props) => {
                return chroma(props.color).luminance() < 0.25
                    ? "white"
                    : "black";
            },
        },
    },
};

class NewPaletteAddColorForm extends React.Component {
    state = {
        name: "",
    };

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
            if (!this.props.colors.find((c) => c.name === value)) return true;
            return false;
        });
    }

    componentWillUnmount() {
        ValidatorForm.removeValidationRule("isColorNameUnique");
    }

    handleChange = (e) => this.setState({ name: e.target.value });

    handleSubmit = () => {
        const { addPaletteColor, color } = this.props;
        addPaletteColor({ name: this.state.name, color });
        this.setState({ name: "" });
    };

    render() {
        const { name } = this.state;
        const { classes, color, colors } = this.props;
        const disabled = name === "" || colors.length >= 20;
        return (
            <ValidatorForm
                className={classes.root}
                onSubmit={this.handleSubmit}
            >
                <TextValidator
                    variant="outlined"
                    label="Color Name"
                    value={name}
                    onChange={this.handleChange}
                    validators={["required", "isColorNameUnique"]}
                    errorMessages={[
                        "This field is required",
                        "Please enter a unique color name!",
                    ]}
                />
                <Button
                    type="submit"
                    variant="contained"
                    style={{
                        backgroundColor: disabled ? "lightgrey" : color,
                    }}
                    disabled={disabled}
                >
                    {colors.length >= 20 ? "Color Full" : "Add"}
                </Button>
            </ValidatorForm>
        );
    }
}

const mapStateToProps = (state) => ({
    colors: state.newPalette.colors,
});

export default withStyles(styles)(
    connect(mapStateToProps, { addPaletteColor })(NewPaletteAddColorForm)
);
