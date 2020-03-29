import React, { useState, useCallback } from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { AppBar, Drawer, MenuItem } from 'material-ui';

const AppShell = props => {
  const [open, setOpen] = useState(false);

  const handleOpenToggle = useCallback(() => setOpen(open => !open), []);
  const handleRequestChange = useCallback(open => setOpen(open), []);

  return (
    <MuiThemeProvider>
      <AppBar onLeftIconButtonClick={handleOpenToggle} />
      <Drawer open={open} docked={false} onRequestChange={handleRequestChange}>
        <MenuItem primaryText={'Home'} />
      </Drawer>
      <div>
        <div id="content">{React.cloneElement(props.children)}</div>
      </div>
    </MuiThemeProvider>
  );
};

export default AppShell;
