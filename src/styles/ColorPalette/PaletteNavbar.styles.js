const styles = (theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "5vh",
    },
    logo: {
        padding: "0px 20px",
        fontSize: "20px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "5px",
            lineHeight: "12px",
        },
    },
    slider: {
        display: "flex",
        alignItems: "center",
        "& .MuiTypography-root": {
            textAlign: "center",
            marginLeft: "10px",
        },
        "& .MuiSlider-root": {
            width: 250,
            margin: "0px 10px",
        },
        "& .MuiSlider-thumb": {
            width: "16px",
            height: "16px",
            marginTop: "-7px",
        },
        "& .MuiSlider-thumbColorPrimary": {
            color: "green",
        },
        [theme.breakpoints.down("xs")]: {
            "& #palette-color-slider": {
                fontSize: "5px",
                lineHeight: "12px",
            },
            "& .MuiSlider-root": {
                width: 100,
            },
        },
    },
    select: {
        marginLeft: "auto",
        marginRight: "0px",
        [theme.breakpoints.down("xs")]: {
            "& .MuiInput-formControl": {
                fontSize: "12px",
            },
        },
    },
});

export default styles;
