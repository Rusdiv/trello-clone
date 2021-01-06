import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import Menu from './Menu';
import Popup from './Popup';

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
      <Menu />
      <div className="header__avatar" onClick={openPopup}>
        <Avatar>{props.user && props.user[0].userName[0]}</Avatar>
        {open && (
          <Popup
            open={open}
            setOpen={setOpen}
            openPopup={openPopup}
            closePopup={closePopup}
            user={props.user}
          />
        )}
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
