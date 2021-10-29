import React from 'react';
import { MenuItem, ListItemText, ListItemIcon } from '@mui/material';

import { Divider } from '@mui/material';
//Divider

const MenuDividerCustom = () => {
  return <Divider sx={{ py: '0', my: '0 !important' }} />;
};

//Menu Item
const MenuItemCustom = ({ close, text, Logo }) => {
  return (
    <MenuItem onClick={close} sx={{ pl: 2 }}>
      <ListItemText
        primary={text}
        primaryTypographyProps={{
          color: 'common',
          fontWeight: 'medium',
          variant: 'body2',
        }}
      />

      {Logo && (
        <ListItemIcon>
          <Logo />
        </ListItemIcon>
      )}
    </MenuItem>
  );
};

//User Item Header

export { MenuItemCustom, MenuDividerCustom };
