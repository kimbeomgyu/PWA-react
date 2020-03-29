import React, { useState, useCallback } from 'react';
import { Toolbar, IconButton, Drawer, AppBar, CssBaseline, MenuItem } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const AppShell = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpenToggle = useCallback(() => setOpen(open => !open), []);
  const handleLinkClick = useCallback(() => setOpen(false), []);

  return (
    <MuiThemeProvider theme={createMuiTheme()}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={handleLinkClick}></Drawer>
      <div>
        <div id="content">{React.cloneElement(children)}</div>
      </div>
    </MuiThemeProvider>
  );
};

export default AppShell;
