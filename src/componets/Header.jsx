import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

const Popup = (props) => {
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
          <button onClick={() => props.closePopup()}>Закрыть</button>
        </div>
      </div>
    </Dialog>
  );
};

function Header(props) {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <div className="header__title">Trello</div>
      <div className="header__avatar" onClick={openPopup}>
        <Avatar>{props.user && props.user[0].userName[0]}</Avatar>
        <Popup
          open={open}
          openPopup={openPopup}
          closePopup={closePopup}
          user={props.user}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

connect(mapStateToProps)(Popup);
export default connect(mapStateToProps)(Header);
