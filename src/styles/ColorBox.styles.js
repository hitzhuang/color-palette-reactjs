import chroma from "chroma-js";
const styles = {
    root: {
        width: "100%",
        height: "100%",
        margin: "0px auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3px",

        "& button": {
            outline: "none",
            border: "none",
            margin: "0px",
            color: "white",
            backgroundColor: (props) => {
                const { background } = props;
                if (!background) return "rgba(255, 255, 255, 0.25)";
                return chroma(background).luminance() >= 0.25
                    ? "rgba(0, 0, 0, 0.3)"
                    : "rgba(255, 255, 255, 0.25)";
            },
            textTransform: "uppercase",
            cursor: "pointer",
        },
        "&:hover button": {
            opacity: 1,
        },
    },
    name: {
        position: "absolute",
        left: "5px",
        bottom: "5px",
        fontSize: "10pt",
        color: (props) => {
            const { background } = props;
            if (!background) return "white";
            return chroma(props.background).luminance() < 0.25
                ? "white"
                : "black";
        },
    },
    backBtn: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100px",
        height: "40px",
        transform: "translate(-50px, -20px)",
    },
    seeMoreBtn: {
        position: "absolute",
        right: "0px",
        bottom: "0px",
        padding: "5px 10px",
        fontSize: "8pt",
    },
    copyBtn: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100px",
        height: "40px",
        transform: "translate(-50px, -20px)",
        opacity: "0",
        transition: "opacity 1s",
    },
    overlayBg: {
        opacity: "0",
        zIndex: "1000",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0)",

        "&.show": {
            opacity: "1",
            transform: "scale(50)",
            position: "absolute",
        },
    },
    overlayMsg: {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        opacity: "0",
        transform: "scale(0)",
        color: "white",
        zIndex: "1001",

        "&.show": {
            opacity: "1",
            transform: "scale(1)",
            transition: "all 0.5s ease-in-out",
            transitionDelay: "0.3s",
        },
        "& h1": {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            padding: "20px",
            fontWeight: "400",
            marginBottom: "0px",
            fontSize: "48pt",
        },
        "& p": {
            fontSize: "18pt",
            fontWeight: "100",
        },
    },
};

export default styles;
