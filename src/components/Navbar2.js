import * as React from 'react';
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" style={{ backgroundColor: '#fff', color: '#3e3e65' }}>
            <Toolbar sx={{ justifyContent: 'center', '@media (max-width: 900px)': { justifyContent: 'left' } }}>
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
                    component={Link}
                    to="/"
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
                        <Button 
                            key={index} 
                            color="inherit" 
                            component={Link} 
                            to={page.path} 
                            sx={{
                                color: location.pathname === page.path ? '#10aad6' : '#3e3e65',
                                backgroundColor: location.pathname === page.path ? 'unset' : 'unset',
                                fontWeight: 700,
                                fontSize: '16px',
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'none',
                                    backgroundColor: location.pathname === page.path ? 'unset' : 'rgba(0, 0, 0, 0.04)',
                                    color: location.pathname === page.path ? '#10aad6' : '#10aad6',
                                },
                            }}
                        >
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
                        <Button 
                            color="inherit" 
                            component={Link} 
                            to={page.path}
                            sx={{
                                color: '#10aad6',
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'none',
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                },
                            }}
                        >
                            {page.name}
                        </Button>
                    </MenuItem>
                ))}
            </Menu>
        </AppBar>
    );
}

export default NavBar2;
