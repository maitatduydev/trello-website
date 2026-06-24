import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import "@fontsource/be-vietnam-pro";
import { theme } from "~/theme/theme";
import App from "./App";

const storageManager = (params) => {
    const { key } = params;

    return {
        get: (defaultValue) => {
            const value = localStorage.getItem(key);

            return value ?? defaultValue;
        },

        set: (value) => {
            localStorage.setItem(key, value);
        },

        subscribe: (handler) => {
            const listener = (event) => {
                if (event.key === key) {
                    handler(event.newValue);
                }
            };

            window.addEventListener("storage", listener);

            return () => {
                window.removeEventListener("storage", listener);
            };
        },
    };
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <InitColorSchemeScript />
        <ThemeProvider
            theme={theme}
            defaultMode="system"
            storageManager={storageManager}
            disableTransitionOnChange
        >
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>,
);
