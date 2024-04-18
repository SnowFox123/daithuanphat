import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "../style/navbar.css";
import "../style/style.css"


const pages = [
    { name: 'Về công ty', path: '/about' },
    { name: 'Trang chủ', path: '/' },
    { name: 'SẢN PHẨM & THIẾT BỊ', path: '/products' },
    { name: 'Tin tức & Sự kiện', path: '/news-events' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Liên hệ', path: '/contact' }
];

function NavBar2() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleOpenMenu}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page, index) => (
                        <Button key={index} color="inherit" component={Link} to={page.path}>
                            {page.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {pages.map((page, index) => (
                    <MenuItem key={index} onClick={handleCloseMenu}>
                        <Button color="inherit" component={Link} to={page.path}>
                            {page.name}
                        </Button>
                    </MenuItem>
                ))}
            </Menu>
        </AppBar>
    );
}

export default NavBar2;
