import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';

const Popup = (props) => {
  useEffect(() => {}, [props]);

  return (
    <Dialog
      onClose={props.closePopup}
      open={props.open}
      aria-labelledby="form-dialog-title"
    >
      <div className="header__popup">
        <div className="header__popup-avatar">
          <Avatar>{props.user && props.user[0].userName[0]}</Avatar>
          <span style={{ marginLeft: '10px' }}>
            {props.user && props.user[0].userName}
          </span>
        </div>
        <p>login:{props.user && props.user[0].userLogin}</p>
        <p>password:{props.user && props.user[0].userPassword}</p>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={props.closePopup}
          >
            Закрыть
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default Popup;
