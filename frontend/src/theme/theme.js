import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    colorSchemeSelector: "class",

    cssVariables: true,

    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#0C66E4",
                    light: "#579DFF",
                    dark: "#0055CC",
                    contrastText: "#FFFFFF",
                },

                secondary: {
                    main: "#44546F",
                },

                background: {
                    default: "#F1F2F4",
                    paper: "#FFFFFF",
                },

                text: {
                    primary: "#172B4D",
                    secondary: "#626F86",
                },

                divider: "#DFE1E6",

                success: {
                    main: "#22A06B",
                },

                warning: {
                    main: "#F5CD47",
                },

                error: {
                    main: "#CA3521",
                },
            },
        },

        dark: {
            palette: {
                primary: {
                    main: "#579DFF",
                    light: "#85B8FF",
                    dark: "#0C66E4",
                    contrastText: "#172B4D",
                },

                secondary: {
                    main: "#B6C2CF",
                },

                background: {
                    default: "#101214",
                    paper: "#161A1D",
                },

                text: {
                    primary: "#F1F2F4",
                    secondary: "#B6C2CF",
                },

                divider: "#2C333A",

                success: {
                    main: "#4BCE97",
                },

                warning: {
                    main: "#F5CD47",
                },

                error: {
                    main: "#F87168",
                },
            },
        },
    },

    typography: {
        fontFamily: `
            "Be Vietnam Pro",
            Inter,
            Arial,
            sans-serif
        `,

        h1: {
            fontWeight: 700,
        },

        h2: {
            fontWeight: 700,
        },

        h3: {
            fontWeight: 600,
        },

        body1: {
            fontSize: "0.95rem",
        },

        body2: {
            fontSize: "0.875rem",
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },

            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 8,
                    fontWeight: 600,
                    color: "currentColor",
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 1px 2px rgba(9,30,66,0.15)",
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                size: "small",
            },
        },

        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    fontWeight: 600,
                },
            },
        },
    },

    trelloCustom: {
        appBarHeight: "60px",
        boardBarHeight: "58px",
    },
});
