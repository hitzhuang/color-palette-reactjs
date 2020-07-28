import React from "react";
import { connect } from "react-redux";
import MiniPalette from "./MiniPalette";

import Grid from "@material-ui/core/Grid";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PaletteList = ({ list }) => (
    <Grid container spacing={4} component={TransitionGroup}>
        {list.map((p) => (
            <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <Grid item md={4} sm={6} xs={12}>
                    <MiniPalette {...p} />
                </Grid>
            </CSSTransition>
        ))}
    </Grid>
);

const mapStateToProps = (state) => ({
    list: state.palettes.list,
});

export default connect(mapStateToProps)(PaletteList);
