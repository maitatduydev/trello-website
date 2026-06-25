import ModeSelect from "~/components/ModeSelect/ModeSelect";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import TrelloIcon from "~/assets/images/trello.svg?react";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Workspaces from "~/components/Menus/Workspaces";
import Recent from "~/components/Recent/Recent";
import Starred from "~/components/Starred/Starred";
import Templates from "~/components/Templates/Templates";
import Profiles from "../Profiles/Profiles";

export default function AppBar() {
    return (
        <>
            <Box
                px={2}
                sx={{
                    width: "100%",
                    height: (theme) => theme.trelloCustom.appBarHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 16px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItem: "center",
                        gap: 2,
                    }}
                >
                    <AppsIcon />
                    <SvgIcon component={TrelloIcon} inheritViewBox />
                    <Typography
                        variant="span"
                        sx={{
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                    >
                        Trello
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItem: "center",
                        gap: 2,
                    }}
                >
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "text.primary",
                            borderWidth: 2,
                            width: 100,
                            fontWeight: 500,
                        }}
                    >
                        Create
                    </Button>
                    <TextField
                        size="small"
                        id="outlined-search"
                        label="Search"
                        type="search"
                        sx={{
                            color: "text.primary",

                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "text.primary",
                                    borderWidth: 2,
                                    borderRadius: 2,
                                },

                                "& .MuiInputBase-input": {
                                    fontSize: 14,
                                },

                                "&:hover fieldset": {
                                    borderColor: "text.primary",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "text.primary",
                                },
                            },

                            "& .MuiInputLabel-root": {
                                color: "text.primary",
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "text.primary",
                            },
                        }}
                    />
                    <ModeSelect />
                    <Tooltip title="Notifications">
                        <Badge color="secondary" variant="dot">
                            <NotificationsIcon
                                sx={{
                                    cursor: "pointer",
                                }}
                            />
                        </Badge>
                    </Tooltip>

                    <Tooltip title="Helps">
                        <Badge color="secondary" variant="dot">
                            <HelpOutlinedIcon
                                sx={{
                                    cursor: "pointer",
                                }}
                            />
                        </Badge>
                    </Tooltip>

                    <Profiles />
                </Box>
            </Box>
        </>
    );
}
