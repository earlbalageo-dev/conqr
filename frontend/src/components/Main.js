import React from 'react';
import Container from '@mui/material/Container';
import LandingScreen from './screens/LandingScreen';
const Main = () => {
  return (
    <Container maxWidth='auto' style={{ minHeight: '100vh', padding: 0 }}>
      <LandingScreen />
    </Container>
  );
};

export default Main;
