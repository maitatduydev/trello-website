import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";

export default function Profiles() {
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
            <Box>
                <Tooltip title="Account settings">
                    <IconButton
                        id="button-profiles"
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? "menu-profiles" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open}
                    >
                        <Avatar sx={{ width: 28, height: 28 }} />
                    </IconButton>
                </Tooltip>
                <Menu
                    id="menu-profiles"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        list: {
                            "aria-labelledby": "button-profiles",
                        },
                    }}
                    dense="true"
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar sx={{ width: 28, height: 28, marginRight: 1 }} /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Avatar sx={{ width: 28, height: 28, marginRight: 1 }} /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Box>
        </>
    );
}
