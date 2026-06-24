import Box from "@mui/material/Box";

export default function BoardBar() {
    return (
        <Box
            sx={{
                backgroundColor: "secondary.main",
                width: "100%",
                height: (theme) => theme.trelloCustom.boardBarHeight,
                display: "flex",
                alignItems: "center",
            }}
        >
            Board Bar
        </Box>
    );
}
