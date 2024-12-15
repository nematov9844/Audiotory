import { useState } from "react";
import { Box, Button, List, ListItem, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../assets/Logo.png";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <Box
            sx={
                {
                    width: "90%",
                    bgcolor: "rgba(4, 15, 70, 0.4)",
                    backdropFilter:"blur(2px)",
                    position:"sticky",
                    padding:"0px 20px",
                    left:"5%",
                    top:"0",
                    zIndex:"999"
                }
            }>
            <Box
                sx={{
                    margin: "0 auto", maxWidth: "1440px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0px",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                    color: "white",
                }}
            >
                {/* Logo */}
                <Box>
                    <img src={Logo} alt="Logo" style={{ maxHeight: "40px", maxWidth: "100%" }} />
                </Box>

                {/* Menu for larger screens */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                    }}
                >
                    <List sx={{ display: "flex", alignItems: "center", gap: "20px", fontFamily: 'Ubuntu, sans-serif' }}>
                        <ListItem sx={{ display: "flex", gap: "10px" }}>
                            <span>Как</span> <span>купить</span>
                        </ListItem>
                        <ListItem>F.A.Q</ListItem>
                        <ListItem>Контакты</ListItem>
                    </List>
                </Box>

                {/* Right-side buttons */}
                <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <Button color="white">
                        <SearchIcon />
                    </Button>

                    {/* For larger screens */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
                        <Button variant="buttonHeader">Регистрация</Button>
                        <Button variant="buttonHeader2">Войти</Button>
                    </Box>

                    {/* Menu button for smaller screens */}
                    <IconButton
                        sx={{ display: { xs: "block", md: "none" }, color: "white" }}
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* Drawer for smaller screens */}
                <Drawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    sx={{
                        "& .MuiDrawer-paper": {
                            width: "250px",
                            bgcolor: "rgba(4, 15, 70, 0.2)",
                            backdropFilter: "blur(5px)",
                            height: "100%",
                            color: "white",
                            padding: "20px",
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: "250px",
                            height: "100%",
                            color: "white",
                            padding: "20px",
                        }}
                    >
                        <IconButton
                            sx={{ color: "white", marginBottom: "20px" }}
                            onClick={() => setIsDrawerOpen(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                        <List>
                            <ListItem>Как купить</ListItem>
                            <ListItem>F.A.Q</ListItem>
                            <ListItem>Контакты</ListItem>
                            <ListItem>
                                <Button variant="buttonHeader" fullWidth>
                                    Регистрация
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button variant="buttonHeader2" fullWidth>
                                    Войти
                                </Button>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </Box>
    );
}
