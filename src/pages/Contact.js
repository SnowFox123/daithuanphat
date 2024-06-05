import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Typography, TextField, Button, Grid, InputAdornment } from '@mui/material';

function Contact() {
  const rootStyle = {
    padding: '0 8% 5% 8%',
  };

  const formContainerStyle = {
    height: '100%', // Ensure the form container fills the full height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const textFieldStyle = {
    marginBottom: '16px',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box style={rootStyle}>
      <p className='header-title-2'>THÔNG TIN LIÊN HỆ</p>

      <Grid item xs={12} md={12} style={{ display: 'flex', height: '400px' }}>
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6100105370224!2d106.8073080748579!3d10.84112758931161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1717595932717!5m2!1sen!2s"
          style={{ border: 0, flexGrow: 1 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Box>
      </Grid>
      <Grid container spacing={2} style={{ height: '100%' }}>
        <Grid item xs={12} md={7} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={formContainerStyle}>
            <Typography variant="h6" align="center" gutterBottom className='title-contact'>
              <Box display="flex" alignItems="center" justifyContent="left">
                <EmailIcon style={{ marginRight: 8 }} />
                Để lại lời nhắn cho chúng tôi
              </Box>
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid container spacing={2} item xs={12}>
                <Grid container spacing={2} item xs={6}>
                  <Grid item xs={12}>
                    <TextField
                      style={textFieldStyle}
                      label="Họ và tên của bạn"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      style={textFieldStyle}
                      label="Số điện thoại của bạn"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      style={textFieldStyle}
                      label="Email của bạn"
                      variant="outlined"
                      fullWidth
                      required
                      type="email"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <EmailIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                    />
                  </Grid>

                </Grid>

                <Grid item xs={6}>
                  <Grid item xs={12}>
                    <TextField
                      style={textFieldStyle}
                      label="Nội dung"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={6}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      GỬI LIÊN HỆ
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={5} >
          <div style={formContainerStyle}>
            <Typography variant="h6" align="center" gutterBottom className='title-contact'>
              <Box display="flex" alignItems="center" justifyContent="left">
                <HomeWorkIcon style={{ marginRight: 8 }} />
                Thông tin liên hệ
              </Box>
            </Typography>
            <Grid item xs={12} md={12} style={{ display: 'flex', height: '400px' }}>
              <Box display="flex" alignItems="center" justifyContent="left">
                <LocationOnIcon style={{ marginRight: 8 }} />
                <p><strong>Địa chỉ</strong><br></br>22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP HCM</p>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="left">
                <MailOutlineIcon style={{ marginRight: 8 }} />
                <p><strong>Email</strong><br></br>Daithuanphat@gmail.com</p>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="left">
                <PhoneIcon style={{ marginRight: 8 }} />
                <p><strong>Điện thoại</strong><br></br>+84 (24) 8888 9999</p>
              </Box>

            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
