import * as React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

import zaloicon from '../image/zaloicon.png';
import facebookicon from '../image/facebookicon.png';
import linkedicon from '../image/linkedicon.png';
import youtubeicon from '../image/youtubeicon.png';


import "../style/navbar.css";
import "../style/style.css";

const pages = [
    { name: 'Về công ty', path: '/about' },
    { name: 'Trang chủ', path: '/' },
    { name: 'SẢN PHẨM & THIẾT BỊ', path: '/products' },
    { name: 'Tin tức & Sự kiện', path: '/news-events' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Liên hệ', path: '/contact' }
];

function NavBar1() {
    const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#000', color: '#3e3e65', padding: '0 40px' }}>
            <Toolbar sx={{ justifyContent: 'space-between', '@media (max-width: 900px)': { justifyContent: 'space-between' }, '@media (min-width: 600px)': { minHeight: '50px' } }}>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '15px', color: 'white', fontWeight: '500', fontFamily: 'futura-REGULAR, sans-serif' }}>
                    <div className="hotline-left">
                        <span>Zalo: </span>
                        <span className='sdt-contact'><a href="https://www.zalo.me">0966158666</a></span>
                        <span> (8h – 21h30)</span>
                    </div>
                    <div className="aff-left">
                        <Link className='lhht' to="/contact">Liên hệ hợp tác</Link>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                    <IconButton style={{ padding: '0 4px' }} className='icon-navbar' component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" color="inherit">
                    <img src={facebookicon} alt="Zalo" style={{ width: 30, height: 30 }} />
                    </IconButton>
                    <IconButton style={{ padding: '0 4px' }} className='icon-navbar' component="a" href="https://www.zalo.me" target="_blank" rel="noopener noreferrer" color="inherit">
                        <img src={zaloicon} alt="Zalo" style={{ width: 30, height: 30 }} />
                    </IconButton>
                    <IconButton style={{ padding: '0 4px' }} className='icon-navbar' component="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" color="inherit">
                    <img src={linkedicon} alt="Zalo" style={{ width: 30, height: 30 }} />
                    </IconButton>
                    <IconButton style={{ padding: '0 4px' }} className='icon-navbar' component="a" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" color="inherit">
                    <img src={youtubeicon} alt="Zalo" style={{ width: 30, height: 30, padding: '4px' }} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar1;
