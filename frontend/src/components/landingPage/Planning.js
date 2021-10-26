import React from 'react';
import plan from '../../assets/images/plan.jpg';
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mainContainer: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
  },
  image: {
    display: 'block',
    width: '100%',
    heigth: '100%',
  },
  imageContainer: {
    width: '70%',
  },
  textContainer: {
    width: '70%',
    marginTop: '5rem',
  },
});

const Planning = () => {
  const { image, mainContainer, imageContainer, textContainer } = useStyles();

  return (
    <Grid container className={mainContainer}>
      <Grid item sm={8} xs={12}>
        <Grid container justifyContent='center' alignItems='center'>
          <Paper elevation={24} className={imageContainer}>
            <img className={image} src={plan} alt='plan' />
          </Paper>
        </Grid>
      </Grid>

      <Grid item sm={4}>
        <Grid container justifyContent='center' alignItems='center'>
          <Paper className={textContainer} elevation={0}>
            <Typography variant='h3'>
              What{' '}
              <span
                style={{
                  color: '#ef6817',
                }}
              >
                is
              </span>{' '}
              Conqr?
            </Typography>
            <Typography style={{ paddingTop: '1rem' }} variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              eveniet iusto totam, veniam omnis recusandae vel sit dolore non
              molestiae.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Planning;
