import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmDialog from "./Dialog/ConfirmDialog";
import { removePalette } from "../redux/palettes/actions";
import { alertSuccess, alertError } from "../redux/alert/actions";
import { logout } from "../redux/user/actions";
import "../styles/MiniPalette.css";

class MiniPalette extends Component {
    state = {
        confirm: false,
        loading: false,
    };
    handleDelete = (e) => {
        e.stopPropagation();
        this.setState({ confirm: true });
    };
    closeDiglog = () => this.setState({ confirm: false });
    deletePalette = () => {
        if (this.state.loading) return;
        this.setState({ loading: true });
        this.closeDiglog();
        this.props
            .removePalette(this.props.id)
            .then(() => this.props.alertSuccess("Palette is deleted."))
            .catch((e) => {
                this.props.logout();
                this.props.alertError(e.error.message);
            });
    };
    render() {
        const { id, colors, isAuthenticated } = this.props;
        return (
            <div className="MiniPalette">
                <Link to={`/palette/${id}`}>
                    <div className="MiniPalette-colors">
                        {colors.map((c, i) => (
                            <div
                                className="MiniPalette-color"
                                key={`MiniPalette-${id}-${i}`}
                                style={{ backgroundColor: c.color }}
                            ></div>
                        ))}
                    </div>
                    <div className="MiniPalette-footer">
                        {this.props.name}
                        <span className="MiniPalette-emoji">
                            {this.props.emoji}
                        </span>
                    </div>
                </Link>
                {isAuthenticated && (
                    <DeleteIcon
                        className="MiniPalette-delete"
                        fontSize="large"
                        onClick={this.handleDelete}
                    />
                )}
                <ConfirmDialog
                    title="Delete This Palette?"
                    open={this.state.confirm}
                    handleCancel={this.closeDiglog}
                    handleConfirm={this.deletePalette}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(
    connect(mapStateToProps, {
        logout,
        removePalette,
        alertSuccess,
        alertError,
    })(MiniPalette)
);
