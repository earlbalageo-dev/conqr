<Grid container sx={{ py: 'auto' }}>
  <Grid sm={12} item>
    <ImgContainer container>
      <Grid container sm={8} sx={{ px: '30px' }}>
        <Grid item sm={6} xs={12}>
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
        <Grid item sm={12}>
          <Grid
            direction='column'
            justifyContent='center'
            alignItems='center'
            container
          >
            <Grid item sm={3} alignItems='left'>
              <Typography variant='caption'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, incidunt! Velit inventore corrupti fugit, minus
                incidunt rem hic nisi enim.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sm={12}
        alignItems='center'
        justifyContent='center'
        px={{
          width: '152.09px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Button color='primary' variant='contained' size='large'>
          Get Started
        </Button>
      </Grid>
    </ImgContainer>
  </Grid>
</Grid>;