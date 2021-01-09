import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function TaskHistory(props) {
  const [open, setOpen] = useState(false);
  //
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="history">
      <Button variant='outlined' color='primary' onClick={() => setOpen(true)}>Посмотреть историю</Button>
      <Menu onClose={handleClose} open={open}>
        {props.task.history.map((item) => (
          <MenuItem>{item}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
