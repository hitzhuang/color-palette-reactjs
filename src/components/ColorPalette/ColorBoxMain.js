import React from "react";

import ColorBoxCanDelete from "./ColorBoxCanDelete";
import ColorBoxBack from "./ColorBoxBack";
import ColorBox from "./ColorBox";

const ColorBoxMain = (props) => {
    const renderContent = (props) => {
        switch (props.type) {
            case "canDelete":
                return <ColorBoxCanDelete {...props} />;
            case "back":
                return <ColorBoxBack />;
            default:
                return <ColorBox {...props} />;
        }
    };
    return <>{renderContent(props)}</>;
};

export default ColorBoxMain;
