import React, { useState } from 'react';
import { SliderPicker } from 'react-color';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import {
  changeTaskColor,
  addToHistory,
} from '../../store/reducers/tasksReducer';

function TaskColorPicker(props) {
  const [color, setColor] = useState('');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleClick = () => {
    props.changeTaskColor(props.taskId, color);
    props.addToHistory(props.taskId, 'Поменяли цвет');
  };

  return (
    <div className="TaskColor">
      <SliderPicker color={color} onChange={handleChangeComplete} />
      <div className="TaskColor__save">
        <Fab
          onClick={handleClick}
          size="small"
          color="primary"
          aria-label="add"
        >
          <CheckIcon />
        </Fab>
      </div>
    </div>
  );
}

export default connect(null, { changeTaskColor, addToHistory })(
  TaskColorPicker
);
