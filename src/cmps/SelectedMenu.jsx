// import React from 'react'

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

export default function SimpleListMenu({title, options, handle}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    handle(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <span>
      <Button
        id="shift-view"
        aria-haspopup="listbox"
        aria-controls="view-menu"
        aria-label="when device is locked"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuOpen}
        variant='outlined'
      >
        {title}: {options[selectedIndex]}
      </Button>
      
      <Menu
        id="view-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'shift-view',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </span>
  );
}