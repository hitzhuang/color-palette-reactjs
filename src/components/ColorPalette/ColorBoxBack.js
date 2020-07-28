import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import style from "../../styles/ColorPalette/ColorBox.styles";

class ColorBoxBack extends Component {
    handleClick = () => {
        this.props.history.goBack();
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} style={{ backgroundColor: "black" }}>
                <div className="ColorBox-content">
                    <button
                        className={classes.backBtn}
                        onClick={this.handleClick}
                    >
                        back
                    </button>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(withRouter(ColorBoxBack));
