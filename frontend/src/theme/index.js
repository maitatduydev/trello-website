import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#003459",
        },
        secondary: {
            main: "#F7DBA7",
        },
        background: {
            main: "#FCEED5",
        },
        text: {
            primary: "#242B33",
            secondary: "#FDFDFD",
        },
    },
    typography: {
        fontFamily: "Be Vietnam Pro, Arial, sans-serif",
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: "Be Vietnam Pro, Arial, sans-serif",
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: "57px",
                    padding: "14px 35px",
                    height: "48px",
                    fontFamily: "Be Vietnam Pro",
                    textTransform: "none",
                },
            },
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Be Vietnam Pro",
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Be Vietnam Pro",
                },
            },
        },
    },
});
