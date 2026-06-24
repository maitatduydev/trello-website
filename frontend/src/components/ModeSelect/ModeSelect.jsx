import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import SettingsBrightness from "@mui/icons-material/SettingsBrightness";
import { useColorScheme } from "@mui/material/styles";

export default function ModeSelect() {
    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    const handleChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 180, color: "text.primary" }} size="small">
            <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
            <Select
                labelId="label-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
            >
                <MenuItem value={"light"}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <LightMode fontSize="small" />
                        Light
                    </Box>
                </MenuItem>
                <MenuItem value={"dark"}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <DarkMode fontSize="small" />
                        Dark
                    </Box>
                </MenuItem>
                <MenuItem value={"system"}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <SettingsBrightness fontSize="small" />
                        System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}
