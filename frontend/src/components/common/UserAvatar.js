import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
const UserAvatar = ({ initials }) => {
  return <Avatar sx={{ bgcolor: deepPurple[500] }}>{initials}</Avatar>;
};

export default UserAvatar;
