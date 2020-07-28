import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import style from "../../styles/ColorPalette/PaletteNavbar.styles";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class PaletteNavbar extends Component {
    handleColorChange = (e, level) => {
        this.props.changeLevel(level);
    };

    handleFormatChange = (e) => {
        this.props.changeFormat(e.target.value);
    };

    render() {
        const { classes, level, format, changeLevel } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.logo}>
                    <Link to={{ pathname: "/", params: { back: true } }}>
                        Back to Color Palette
                    </Link>
                </div>
                {changeLevel && (
                    <div className={classes.slider}>
                        <Typography id="palette-color-slider">
                            LV {level}
                        </Typography>
                        <Slider
                            track={false}
                            aria-labelledby="palette-color-slider"
                            value={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={this.handleColorChange}
                        />
                    </div>
                )}
                <FormControl className={classes.select}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">
                            RGBA - rgba(255,255,255, 1.0)
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(style)(PaletteNavbar);
