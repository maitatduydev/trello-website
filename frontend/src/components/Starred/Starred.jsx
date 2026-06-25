import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Check from "@mui/icons-material/Check";
import { useState } from "react";

export default function Starred() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box
                sx={{
                    marginLeft: 2,
                }}
            >
                <Button
                    id="button-starred"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open}
                    onClick={handleClick}
                    endIcon={<ExpandMoreIcon />}
                >
                    Starred
                </Button>
                <Menu
                    id="menu-starred"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        list: {
                            "aria-labelledby": "button-starred",
                        },
                    }}
                    dense="true"
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemText inset>Single</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemText inset>1.15</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemText inset>Double</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Check />
                        </ListItemIcon>
                        Custom: 1.2
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemText>Add space before paragraph</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemText>Add space after paragraph</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemText>Custom spacing…</ListItemText>
                    </MenuItem>
                </Menu>
            </Box>
        </>
    );
}
