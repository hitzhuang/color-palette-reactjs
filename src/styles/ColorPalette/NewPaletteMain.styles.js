import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    nav: {
        marginLeft: "auto",
        "& button": {
            margin: "0px 5px",
        },
    },
    appBar: {
        fontSize: "20px",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.down("xs")]: {
            "& .MuiTypography-root": {
                fontSize: "16px",
            },
        },
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    drawerBody: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        "& .btns": {
            margin: "10px 30px",
            "& button": {
                width: "100%",
                marginTop: "10px",
            },
        },
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        height: "calc(100vh - 64px)",
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    contentBody: {
        height: "100%",
    },
}));

export default useStyles;
