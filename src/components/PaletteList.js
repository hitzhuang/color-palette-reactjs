import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MiniPalette from "./MiniPalette";

const PaletteList = ({ list }) => (
    <Grid container spacing={3} component={TransitionGroup}>
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
