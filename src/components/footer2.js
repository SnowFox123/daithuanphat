import React from 'react';
import { Grid, Box, Typography, TextField, Button, IconButton,Link, Container} from '@mui/material';
import { Twitter, YouTube, Facebook } from '@mui/icons-material';
import logoimg from '../image/dtp.png';

import '../style/footer2.css'; // Import the CSS file

const Footer2 = () => {
  return (
    <Box component="footer" className="footer">
      {/* <Box sx={{ backgroundColor: '#14b9d5', py: 5, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: '#fff', letterSpacing: 2 }}>
          KEEP IN TOUCH
        </Typography>
        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold', letterSpacing: 2 }}>
          Travel with Us
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              fullWidth
              type="email"
              placeholder="Your email"
              variant="outlined"
              sx={{ backgroundColor: '#F9F9F9', borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={1}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 2,
                height: '100%',
                width: '100%',
                letterSpacing: 2,
              }}
            >
              SEND
            </Button>
          </Grid>
        </Grid>
      </Box> */}

      <Box sx={{ py: 5 }} style={{ backgroundColor: '#fff', padding:'0px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box component="footer" sx={{ bgcolor: 'background.paper', p: 3, padding:'10px 24px 24px 40px' }}>
              <Container maxWidth="lg">
                <Grid container spacing={4}>
                  <Grid item xs={12} style={{ paddingTop:'0px' }}>
                  <Typography
                    variant="h6"
                    noWrap
                    component={Link}
                    to="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        paddingTop:'0px'
                    }}
                >
                     <img src={logoimg} alt="Logo" style={{ height: '110px', width:'110px' }} />
                </Typography>
                    <Typography variant="h6" component="div">
                      CÔNG TY TNHH ĐẠI THUẬN PHÁT
                    </Typography>
                    <Typography variant="body2">
                      <strong>Địa chỉ:</strong> 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh
                    </Typography>
                    <Typography variant="body2">
                      <strong>Điện thoại:</strong> <Link href="tel:02838753443">(028) 38 753 443</Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      <strong>Email: Liên hệ các vấn đề về đơn hàng Online, kênh cửa hàng, đại lý (offline):</strong> <Link href="mailto:Daithuanphat@gmail.com">Daithuanphat@gmail.com</Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      <strong>Hotline:</strong> <Link href="tel:+84 (24) 8888 9999">+84 (24) 8888 9999</Link>
                    </Typography>
                    <Typography variant="body2">
                      <strong>Thời gian tư vấn:</strong> 8h – 21h30 các ngày trong tuần (trừ ngày Lễ, Tết)
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="textPrimary">
                THÔNG TIN CÔNG TY
                </Typography>
                <Link>ĐẠI THUẬN PHÁT</Link>
                <br></br>
                <Link>LIÊN HỆ</Link>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="textPrimary">
                  PARTNERS
                </Typography>
                <Box>
                  {['Booking', 'RentalCar', 'HostelWorld', 'Trivago', 'TripAdvisor'].map((item, index) => (
                    <Typography variant="body2" color="textSecondary" key={index}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="textPrimary">
                  LAST MINUTE
                </Typography>
                <Box>
                  {['London', 'California', 'Indonesia', 'Europe', 'Oceania'].map((item, index) => (
                    <Typography variant="body2" color="textSecondary" key={index}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: '#14b9d5', py: 2, px: 3, color: '#fff', textAlign: 'center', letterSpacing: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">THE BEST WORDPRESS TRAVEL THEME</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">COPYRIGHT  &copy; 2024 DAI THUAN PHAT</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer2;
