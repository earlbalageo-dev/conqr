import { Box } from '@mui/material';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
const Main = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Switch>
        <Route path='/' component={LandingScreen} exact />
        <Route path='/signup' component={SignUpScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/home' component={HomeScreen} />
      </Switch>
    </Box>
  );
};

export default Main;
