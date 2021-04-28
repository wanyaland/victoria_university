import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';

export default function MenuComponent({label,children}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button 
        ref={anchorRef}
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        endIcon={<ArrowDropDownIcon/>}
      >
        {label}
      </Button>
      <Popper  style={{zIndex: 10000}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {() => (
          <Paper elevation={0} >
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu" >
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
          // </Grow>
        )}
      </Popper>
    </div>
  );
}
