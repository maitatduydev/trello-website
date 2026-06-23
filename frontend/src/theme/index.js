import { extendTheme } from "@mui/material/styles";

export const theme = extendTheme({
    colorSchemeSelector: "class",

    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#2563EB",
                },

                secondary: {
                    main: "#64748B",
                },

                background: {
                    default: "#F8FAFC",

                    paper: "#FFFFFF",
                },

                text: {
                    primary: "#0F172A",
                    secondary: "#64748B",
                },

                divider: "#E2E8F0",
            },
        },

        dark: {
            palette: {
                primary: {
                    main: "#60A5FA",
                },

                secondary: {
                    main: "#94A3B8",
                },

                background: {
                    default: "#0F172A",
                    paper: "#1E293B",
                },

                text: {
                    primary: "#F8FAFC",
                    secondary: "#94A3B8",
                },

                divider: "#334155",
            },
        },
    },

    typography: {
        fontFamily: "Be Vietnam Pro, Arial, sans-serif",
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },

            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 10,
                    fontWeight: 600,
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                },
            },
        },
    },
});
