import React from 'react';
import LinkContainer from '../common/LinkContainer';
import { makeStyles } from '@mui/styles';
import { Menu, Button, Box, ButtonGroup, MenuList } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  MenuDividerCustom as Divider,
  MenuItemCustom as MenuItem,
} from './MenuCustomComponents';

const useStyles = makeStyles({
  menuContainer: {
    minWidth: '70%',
    maxWidth: '70%',
    height: '50%',
    maxHeight: '50%',
  },
});

const HeaderMenu = ({ anchor, closeMenu }) => {
  const { menuContainer } = useStyles();
  return (
    <Menu
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
          sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button onClick={closeMenu}>
            <CloseIcon />
          </Button>
        </Box>

        <MenuList>
          <Divider />

          <MenuItem close={closeMenu} text='Features' />

          <Divider />

          <MenuItem close={closeMenu} text='Pricing' />

          <Divider />

          <MenuItem close={closeMenu} text='Contact Developer' />

          <Divider />
        </MenuList>
      </Box>
      <ButtonGroup
        disableElevation
        sx={{
          display: 'flex',

          justifyContent: 'center',
        }}
        size='large'
        variant='contained'
      >
        <Button onClick={closeMenu} color='primary'>
          <LinkContainer to='/login'>Login</LinkContainer>
        </Button>
        <Button onClick={closeMenu} color='secondary'>
          <LinkContainer to='/signup'>Get Started</LinkContainer>
        </Button>
      </ButtonGroup>
    </Menu>
  );
};

export default HeaderMenu;
