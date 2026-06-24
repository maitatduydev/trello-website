import Box from "@mui/material/Box";

export default function BoardContent() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "background.paper",
                    width: "100%",
                    height: "calc(100vh - 48px - 58px)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                Board Content
            </Box>
        </>
    );
}
