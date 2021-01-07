import { Button, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { connect } from 'react-redux';
import PaletteIcon from '@material-ui/icons/Palette';
import styled from 'styled-components';
import {
  changeBackground,
  addToDeskHistory,
} from '../store/reducers/tasksReducer';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background-size: contain;
  background-repeat: no-repeat;
  ${(props) => {
    return `background-color: ${props.background};`;
  }}
`;

const Picker = styled.div`
  display: block;
`;

function ColorPicker(props) {
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [color, setColor] = useState(props.background);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const saveColor = () => {
    props.changeBackground(color);
    props.addToDeskHistory('changeDeskColor', null, props.user[0].userName);
  };

  return (
    <div>
      {!props.button && <Container background={props.background}></Container>}
      {props.button && props.isAdmin && (
        <div>
          <Picker>
            {!buttonVisibility && (
              <ListItem button onClick={() => setButtonVisibility(true)}>
                <PaletteIcon />
                Cменить фон
              </ListItem>
            )}
            {buttonVisibility && (
              <ChromePicker
                color={color}
                onChangeComplete={handleChangeComplete}
              />
            )}
            {buttonVisibility && (
              <div>
                <Button
                  variant="outlined"
                  onClick={() => setButtonVisibility(false)}
                >
                  Закрыть
                </Button>
                <Button variant="outlined" onClick={() => saveColor()}>
                  Сохранить
                </Button>
              </div>
            )}
          </Picker>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    background: state.tasksReducer.background,
    state: state.tasksReducer,
    isAdmin: state.authReducer.isAdmin,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps, {
  changeBackground,
  addToDeskHistory,
})(ColorPicker);
