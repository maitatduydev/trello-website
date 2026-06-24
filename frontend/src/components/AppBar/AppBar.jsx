import ModeSelect from "../ModeSelect/ModeSelect";
import Box from "@mui/material/Box";

export default function AppBar() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    width: "100%",
                    height: (theme) => theme.trelloCustom.appBarHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <ModeSelect />
            </Box>
        </>
    );
}
