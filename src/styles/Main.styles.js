import yellow from "@material-ui/core/colors/yellow";

const styles = {
    root: {
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
    },
    content: {
        backgroundColor: "rgba(255, 255, 255,0.3)",
        padding: "0px 20px 40px 20px",
        borderRadius: "15px",
    },
    nav: {
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "25px 0px",
        lineHeight: "20pt",
    },
    logo: {
        fontSize: "20pt",
        fontWeight: "bold",
    },
    link: {
        marginLeft: "auto",
    },
    yellowBtn: {
        backgroundColor: yellow[800],
        color: "white",
        "&:hover": {
            backgroundColor: yellow[900],
        },
    },
};

export default styles;
