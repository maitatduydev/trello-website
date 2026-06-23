import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorScheme } from "@mui/material/styles";

export default function ToggleTheme() {
    const { mode, setMode } = useColorScheme();

    if (!mode) return null;

    return (
        <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}
