import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthRedirect from './componets/AuthRedirect';
import ColorPicker from './componets/ColorPicker';
import Header from './componets/Header';
import ListsContainer from './componets/ListsContainer';
import LoginPage from './componets/loginPage/LoginPage';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Header />
              <ListsContainer />
              <ColorPicker />
            </div>
          )}
        />

        <AuthRedirect />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, null)(App);
