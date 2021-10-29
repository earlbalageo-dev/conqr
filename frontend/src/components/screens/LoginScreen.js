import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/actions/userActions';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
  Alert,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LinkContainer from '../common/LinkContainer';
import Loader from '../common/Loader';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
});

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const { container } = useStyles();

  const dispatch = useDispatch();

  const redirect = '/home';

  const isEmailValid = (e) => {
    e.preventDefault();
    //check if email is a valid email
    if (email) {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setEmailValid(valid);
    } else {
      return;
    }
  };

  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  useEffect(() => {
    //history push
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, redirect, history]);
  return (
    <Container maxWidth='xs' className={container}>
      <Paper elevation={24} sx={{ py: '2rem' }}>
        <Typography color='primary' variant='h2'>
          Login
        </Typography>
        {loading ? (
          <Loader />
        ) : (
          <Box sx={{ p: '2rem' }} component='form' onSubmit={handleSubmit}>
            <Grid spacing={2} container>
              <Grid item xs={12}>
                {error && (
                  <Alert sx={{ mb: '1rem' }} severity='error'>
                    {error}
                  </Alert>
                )}
                <TextField
                  error={(error || !emailValid) && true}
                  color='secondary'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  helperText={!emailValid && 'Please Enter a valid email'}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={isEmailValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container textAlign='start'>
              <Grid item xs>
                <LinkContainer to='/signup' variant='body2'>
                  <Typography color='secondary'>Forgot password?</Typography>
                </LinkContainer>
              </Grid>
              <Grid item>
                <LinkContainer to='/signup' variant='body2'>
                  <Typography color='secondary'>Sign-up</Typography>
                </LinkContainer>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default LoginScreen;
