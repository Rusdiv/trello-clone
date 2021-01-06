import React from 'react';
import { SliderPicker } from 'react-color';

function TaskColorPicker(props) {
  const handleChangeComplete = (color) => {
    props.setColor(color.hex);
  };

  return (
    <div className="TaskColor">
      <SliderPicker color={props.color} onChange={handleChangeComplete} />
    </div>
  );
}

export default TaskColorPicker;
