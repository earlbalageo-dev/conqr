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
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import LinkContainer from './common/LinkContainer';
import UserAvatar from './common/UserAvatar';
import HeaderMenu from './common/HeaderMenu';
import UserMenu from './common/UserMenu';
const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleLogout = () => {
    handleCloseMenu();
    dispatch(logout());
  };

  //Open/Close Menu
  const handleOpenMenu = (e) => {
    setMenuAnchor(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

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
              <Container sx={{ px: '0 !important' }}>
                <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                  <LinkContainer to='/login'>
                    <IconButton sx={{ mx: 2 }} size='small' color='inherit'>
                      Login
                    </IconButton>
                  </LinkContainer>
                </Box>

                <LinkContainer to='/signup'>
                  <Button size='medium' variant='contained' color='secondary'>
                    Get Started
                  </Button>
                </LinkContainer>

                <IconButton
                  onClick={handleOpenMenu}
                  sx={{ ml: 2, p: 0, display: { md: 'none' } }}
                >
                  <MenuIcon color='inherit' />
                </IconButton>

                <HeaderMenu anchor={menuAnchor} closeMenu={handleCloseMenu} />
              </Container>
            ) : (
              <Container sx={{ px: '0 !important' }}>
                <IconButton onClick={handleOpenMenu}>
                  <UserAvatar initials={userInfo.initials} />
                </IconButton>
                <UserMenu
                  anchor={menuAnchor}
                  closeMenu={handleCloseMenu}
                  userInfo={userInfo}
                  logout={handleLogout}
                />
              </Container>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
