import React from 'react';
import LinkContainer from '../common/LinkContainer';
import { makeStyles } from '@mui/styles';
import {
  Menu,
  Button,
  Box,
  ButtonGroup,
  MenuList,
  Container,
  Typography,
  ListItemText,
  MenuItem as MenuHeader,
  Grid,
} from '@mui/material';
import UserAvatar from './UserAvatar';
import CloseIcon from '@mui/icons-material/Close';
import {
  MenuDividerCustom as Divider,
  MenuItemCustom as MenuItem,
} from './MenuCustomComponents';

const useStyles = makeStyles({
  menuContainer: {
    minWidth: '20%',
    maxWidth: '70%',
    height: '50%',
    maxHeight: '50%',
  },
});

const UserMenu = ({ anchor, closeMenu, userInfo, logout }) => {
  const { menuContainer } = useStyles();
  const { initials, firstName, lastName, email } = userInfo;
  return (
    <Menu
      sx={{ px: '0' }}
      PopoverClasses={{ paper: menuContainer }}
      id='demo-positioned-menu'
      aria-labelledby='demo-positioned-button'
      anchorEl={anchor}
      open={anchor ? true : false}
      onClose={closeMenu}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box sx={{ mb: 5 }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
          }}
        >
          <MenuHeader disabled sx={{ mx: 'auto' }}>
            <ListItemText
              primary='Account'
              primaryTypographyProps={{
                color: 'common',
                fontWeight: 'medium',
                variant: 'body2',
              }}
            />
          </MenuHeader>
          <Button onClick={closeMenu}>
            <CloseIcon />
          </Button>
        </Box>

        <MenuList>
          <Divider />
          <Box sx={{ pl: '1rem' }}>
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid item xs={2}>
                <UserAvatar initials={initials} />
              </Grid>
              <Grid sx={{ ml: '1rem' }} item xs={9}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant='h6'>{`${firstName} ${lastName}`}</Typography>
                  </Grid>
                  <Grid overflow='true' item xs={12}>
                    <Typography variant='caption'>{email}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          <MenuItem close={closeMenu} text='Profile' />
          <MenuItem close={closeMenu} text='Activity' />
          <MenuItem close={closeMenu} text='Templates' />
          <Divider />
          <MenuItem close={closeMenu} text='Settings & Privacy' />

          <MenuItem close={closeMenu} text='Help' />

          <Divider />
          <MenuItem close={logout} text='Signout' />
        </MenuList>
      </Box>
    </Menu>
  );
};

export default UserMenu;
