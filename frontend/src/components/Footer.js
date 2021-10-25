import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const FootContainer = styled('div')({
  margin: '0 auto',
});
const Footer = () => {
  return (
    <Box>
      <AppBar position='sticky' color='secondary' sx={{ marginTop: '-64px' }}>
        <Toolbar>
          <FootContainer>
            <Typography variant='body1' color='inherit'>
              © 2021 Conqr by: Earl Balageo
            </Typography>
          </FootContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
