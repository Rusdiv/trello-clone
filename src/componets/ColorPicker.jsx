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
  background-size: contain;
  background-repeat: no-repeat;
  ${(props) => {
    if (props.url === '') {
      return `background-color: ${props.background};`;
    }
  }}
  ${(props) => {
    if (props.url !== '') {
      return `background-image: url(${props.url});`;
    }
  }}
`;

const Picker = styled.div`
  display: block;
  position: fixed;
  top: 10px;
  right: 10px;
`;

function ColorPicker(props) {
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [buttonVisibilityPhoto, setButtonVisibilityPhoto] = useState(false);

  const handleChangeComplete = (color) => {
    props.changeBackground(color.hex);
  };

  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <Container background={props.background} url={url}></Container>
      {props.isAdmin && (
        <div>
          <Picker>
            {!buttonVisibility && (
              <button onClick={() => setButtonVisibility(true)}>
                Поменять цвет фона
              </button>
            )}
            {buttonVisibility && (
              <ChromePicker
                color={props.background}
                onChangeComplete={handleChangeComplete}
              />
            )}
            {buttonVisibility && (
              <button onClick={() => setButtonVisibility(false)}>
                Закрыть
              </button>
            )}
          </Picker>
          <div>
            {!buttonVisibilityPhoto && (
              <button onClick={() => setButtonVisibilityPhoto(true)}>
                Поставить картинку на фон
              </button>
            )}
            {buttonVisibilityPhoto && (
              <input onChange={handleChange} placeholder="url на фото" />
            )}
          </div>
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
  };
};

export default connect(mapStateToProps, {
  changeBackground,
})(ColorPicker);
