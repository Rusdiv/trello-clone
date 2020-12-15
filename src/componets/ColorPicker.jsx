import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

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

export default function ColorPicker() {
  const [background, setBackground] = useState('#fff');
  const [buttonVisibility, setButtonVisibility] = useState(false);

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };

  return (
    <div>
      <Container color={background}></Container>
      <Picker>
        {!buttonVisibility && (
          <button onClick={setButtonVisibility}>ChangeColor</button>
        )}
        {buttonVisibility && (
          <ChromePicker
            color={background}
            onChangeComplete={handleChangeComplete}
          />
        )}
      </Picker>
    </div>
  );
}
