import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function AuthRedirect(props) {
  if (!props.isAuth) return <Redirect to="/login" />;
  return <div></div>;
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps)(AuthRedirect);
