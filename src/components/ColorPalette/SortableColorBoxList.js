import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import ColorBoxMain from "./ColorBoxMain";

const SortableColorBoxList = ({ classes, colors }) => {
    return (
        <div className={classes.contentBody}>
            {colors.map((c, i) => (
                <ColorBoxMain
                    key={`new_color_${c.name}`}
                    index={i}
                    type="canDelete"
                    name={c.name}
                    backgroundColor={c.color}
                />
            ))}
        </div>
    );
};

export default SortableContainer(SortableColorBoxList);
