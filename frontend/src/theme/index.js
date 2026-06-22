import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
            styleOverrides: {
                root: {
                    fontFamily: "Be Vietnam Pro",
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
