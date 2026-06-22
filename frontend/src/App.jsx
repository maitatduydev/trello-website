import Button from "@mui/material/Button";
import AdsClickIcon from "@mui/icons-material/AdsClick";

export default function App() {
    return (
        <>
            <Button variant="contained" size="small" startIcon={<AdsClickIcon />}>
                Click me
            </Button>
        </>
    );
}
