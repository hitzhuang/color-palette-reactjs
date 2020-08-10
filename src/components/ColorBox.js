import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/core/styles";
import style from "../styles/ColorBox.styles";

class ColorBox extends Component {
    state = {
        copied: false,
    };

    handelCopy = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false });
            }, 2000);
        });
    };

    handleMore = () => {
        this.props.history.push(
            `/palette/${this.props.match.params.id}/${this.props.colorId}`
        );
    };

    renderContent = () => {
        const { classes, background, name, type } = this.props;
        return (
            <div>
                <div className={classes.name}>{name}</div>
                <CopyToClipboard text={background} onCopy={this.handelCopy}>
                    <button className={classes.copyBtn}>copy</button>
                </CopyToClipboard>

                {/* see more button */}
                {type === "more" && (
                    <button
                        className={classes.seeMoreBtn}
                        onClick={this.handleMore}
                    >
                        more
                    </button>
                )}
            </div>
        );
    };

    render() {
        const { classes, background } = this.props;
        const { copied } = this.state;
        return (
            <div className={classes.root} style={{ background }}>
                {/* overlay */}
                <div
                    className={`${classes.overlayBg} ${copied && "show"}`}
                    style={{ background }}
                ></div>

                {/* overlay message */}
                <div className={`${classes.overlayMsg} ${copied && "show"}`}>
                    <h1>copied!</h1>
                    <p>{background}</p>
                </div>

                {/* content */}
                {this.renderContent()}
            </div>
        );
    }
}

export default withStyles(style)(withRouter(ColorBox));
