import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ColorBoxMain from "./ColorBoxMain";
import PaletteNavbar from "./PaletteNavbar";
import PaletteFooter from "./PaletteFooter";

import { generatePalette } from "../../utils/ColorPalette/colorHelper";
import "../../styles/ColorPalette/Palette.css";
import { Container, Grid } from "@material-ui/core";

class Palette extends Component {
    constructor(props) {
        super(props);

        let id = props.match.params.id;
        let palette = props.list.find((p) => p.id === id);
        if (palette) {
            this._props = { ...generatePalette(palette) };
        }
    }

    state = {
        format: "hex",
        level: 500,
    };

    changeFormat = (format) => this.setState({ format });

    changeLevel = (level) => this.setState({ level });

    renderColorBoxes = () => {
        const { level, format } = this.state;
        return this._props.colors[level].map((c) => (
            <Grid
                key={`${this._props.id}-${c.name}`}
                item
                md={3}
                sm={6}
                xs={12}
            >
                <ColorBoxMain
                    type="more"
                    colorId={c.id}
                    background={c[format]}
                    name={c.name}
                />
            </Grid>
        ));
    };

    render() {
        if (!this._props) {
            return <Redirect to="/" />;
        }
        return (
            <Container className="Palette" maxWidth={false}>
                <PaletteNavbar
                    level={this.state.level}
                    format={this.state.format}
                    changeFormat={this.changeFormat}
                    changeLevel={this.changeLevel}
                />
                <Grid container className="Palette-colors">
                    {this.renderColorBoxes()}
                </Grid>
                <PaletteFooter
                    name={this._props.paletteName}
                    emoji={this._props.emoji}
                />
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.palettes.list,
});

export default connect(mapStateToProps)(Palette);
