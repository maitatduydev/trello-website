import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

export default function BoardDetail() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                height: "100vh",
                backgroundColor: "background.default",
            }}
        >
            <AppBar />
            <BoardBar />
            <BoardContent />
        </Container>
    );
}
