import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from '@mui/material';
import LinkContainer from '../common/LinkContainer';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
});
const SignUpScreen = () => {
  const { container } = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('registering');
  };
  return (
    <Container maxWidth='xs' className={container}>
      <Paper elevation={24} sx={{ py: '2rem' }}>
        <Typography color='peimary' variant='h2'>
          Sign-up
        </Typography>
        <Box sx={{ p: '2rem' }} variant='form' onSubmit={handleSubmit}>
          <Grid spacing={2} container>
            <Grid item xs={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <LinkContainer to='/login'>
                <Link href='#' color='secondary' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </LinkContainer>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpScreen;
