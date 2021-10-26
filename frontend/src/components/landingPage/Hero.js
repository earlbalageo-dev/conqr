import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import colabImg from '../../assets/images/colab.jpg';

const ImgContainer = styled(Grid)({
  minHeight: '80vh',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${colabImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const HeroText = styled(Typography)({
  color: '#fff',
  paddingBottom: '20px',
});

const Hero = () => {
  return (
    <ImgContainer>
      <Grid
        container
        direction='column'
        textAlign='center'
        justifyContent='center'
        sx={{ height: '80vh', minWidth: '50vw', margin: '0 auto' }}
      >
        <Grid item>
          <HeroText variant='h2'>
            Manage{' '}
            <span
              style={{
                color: '#ef6817',
                fontWeight: '700',
                fontSize: '64px',
              }}
            >
              ALL{' '}
            </span>
            of your Projects in one place
          </HeroText>
        </Grid>
        <Grid item>
          <Button color='primary' variant='contained' size='large'>
            Get Started
          </Button>
        </Grid>
      </Grid>
    </ImgContainer>
  );
};

export default Hero;
