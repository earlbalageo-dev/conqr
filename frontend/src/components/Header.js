import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../state/actions/userActions';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Container,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import LinkContainer from './common/LinkContainer';
import MobileMenu from './common/MobileMenu';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem disabled onClick={handleMenuClose}>
        Account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        {userInfo && `${userInfo.firstName} ${userInfo.lastName}`}
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = <MobileMenu />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <LinkContainer to='/'>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              sx={{ mr: 0 }}
            >
              <BubbleChartIcon />
              <Typography variant='h5' noWrap>
                Conqr
              </Typography>
            </IconButton>
          </LinkContainer>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { md: 'flex' } }}>
            {!userInfo ? (
              <Container>
                <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                  <LinkContainer to='/login'>
                    <IconButton
                      sx={{ mx: '2rem ' }}
                      size='small'
                      color='inherit'
                    >
                      Login
                    </IconButton>
                  </LinkContainer>
                </Box>

                <LinkContainer to='/signup'>
                  <Button size='medium' variant='contained' color='secondary'>
                    Get Started
                  </Button>
                </LinkContainer>
              </Container>
            ) : (
              <Container>
                <IconButton
                  size='large'
                  aria-label='show 4 new mails'
                  color='inherit'
                >
                  <Badge badgeContent={4} color='error'>
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size='large'
                  aria-label='show 17 new notifications'
                  color='inherit'
                >
                  <Badge badgeContent={17} color='error'>
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size='large'
                  edge='end'
                  aria-label='account of current user'
                  aria-controls={menuId}
                  aria-haspopup='true'
                  onClick={handleProfileMenuOpen}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
              </Container>
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {userInfo && renderMenu}
    </Box>
  );
};

export default Header;
