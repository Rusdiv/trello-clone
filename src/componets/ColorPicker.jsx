import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changeBackground } from '../store/reducers/tasksReducer';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  ${(props) => `
    background: ${props.color};
  `};
`;

const Picker = styled.div`
  display: block;
  position: fixed;
  top: 10px;
  right: 10px;
`;

function ColorPicker(props) {
  const [buttonVisibility, setButtonVisibility] = useState(false);

  const handleChangeComplete = (color) => {
    props.changeBackground(color.hex);
  };

  return (
    <div>
      <Container color={props.background}></Container>
      <Picker>
        {!buttonVisibility && (
          <button onClick={() => setButtonVisibility(true)}>ChangeColor</button>
        )}
        {buttonVisibility && (
          <ChromePicker
            color={props.background}
            onChangeComplete={handleChangeComplete}
          />
        )}
        {buttonVisibility && (
          <button onClick={() => setButtonVisibility(false)}>close</button>
        )}
      </Picker>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    background: state.tasksReducer.background,
    state: state.tasksReducer,
  };
};

export default connect(mapStateToProps, {
  changeBackground,
})(ColorPicker);
