import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

function Contact() {
  const rootStyle = {
    padding: '24px',
  };

  const formContainerStyle = {
    maxWidth: 600,
    margin: 'auto',
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
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <div style={formContainerStyle}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={textFieldStyle}
                label="First Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={textFieldStyle}
                label="Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={textFieldStyle}
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={textFieldStyle}
                label="Subject"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={textFieldStyle}
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
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
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Box>
  );
}

export default Contact;
