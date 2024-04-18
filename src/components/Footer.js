import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { FaRegRegistered } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterContainer = styled('footer')({
  backgroundColor: '#f5f5f5',
  padding: '20px 0',
});

const FooterPage = () => {
  return (
    <FooterContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Typography variant="body1" gutterBottom align="center">
            CÔNG TY TNHH Daithuanphat
          </Typography>
          <Typography variant="body2" gutterBottom align="center">
            <FaEnvelope /> Email: Daithuanphat@gmail.com<br />
            <FaPhone /> Điện thoại: +84 (24) 8888 9999
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" gutterBottom align="center">
            Trụ sở chính
          </Typography>
          <Typography variant="body2" gutterBottom align="center">
            Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton color="primary" aria-label="registered">
              <FaRegRegistered />
            </IconButton>
            <Typography variant="body2" align="center">
              &copy; 2024 Daithuanphat
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default FooterPage;
