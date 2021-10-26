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
import { makeStyles } from '@mui/styles';
import React from 'react';
import LinkContainer from '../common/LinkContainer';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
});
const LoginScreen = () => {
  const { container } = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Logging In');
  };
  return (
    <Container maxWidth='xs' className={container}>
      <Paper elevation={24} sx={{ py: '2rem' }}>
        <Typography color='peimary' variant='h2'>
          Login
        </Typography>
        <Box sx={{ p: '2rem' }} variant='form' onSubmit={handleSubmit}>
          <Grid spacing={2} container>
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
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <LinkContainer to='/signup'>
                <Link href='#' color='secondary' variant='body2'>
                  Need an account? Sign-up
                </Link>
              </LinkContainer>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginScreen;
