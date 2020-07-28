import React, { Component } from "react";

import "../../styles/ColorPalette/PaletteFooter.css";

class PaletteFooter extends Component {
    render() {
        return (
            <div className="PaletteFooter">
                {this.props.name}
                <span className="PaletteFooter-emoji">{this.props.emoji}</span>
            </div>
        );
    }
}

export default PaletteFooter;
