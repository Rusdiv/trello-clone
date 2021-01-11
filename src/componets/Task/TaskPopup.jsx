import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { connect } from 'react-redux';
import {
  addUrl,
  addToHistory,
  changeTaskColor,
  addToDeskHistory,
} from '../../store/reducers/tasksReducer';
import AddUrl from './AddUrl';
import TaskHistory from './TaskHistory';
import TaskColorPicker from './TaskColorPicker';
import AddUser from './AddUser';
import AddTime from './AddTime';

function TaskPopup(props) {
  const [urlValue, setUrlValue] = useState('');
  const [color, setColor] = useState('');

  const addUrl = () => {
    if (urlValue !== '') {
      props.addUrl(urlValue, props.taskId);
      props.addToHistory(props.taskId, 'Добавленна ссылка');
      props.addToDeskHistory(
        'addUrl',
        props.task.content,
        props.user[0].userName
      );
    }
  };

  const changeColor = () => {
    if (props.lastColor !== color && color) {
      props.changeTaskColor(props.taskId, color);
      props.addToHistory(props.taskId, 'Поменяли цвет');
      props.addToDeskHistory(
        'changeTaskColor',
        props.task.content,
        props.user[0].userName
      );
    } else {
      props.changeTaskColor(props.taskId, props.lastColor);
    }
  };

  const handleClick = () => {
    addUrl();
    changeColor();
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <TaskColorPicker
        color={color}
        setColor={setColor}
        taskId={props.taskId}
      />
      <AddUrl urlValue={urlValue} urls={props.urls} setUrlValue={setUrlValue} />
      <TaskHistory task={props.task} />
      <AddUser task={props.task} />
      <AddTime task={props.task} />
      <DialogActions>
        <Button onClick={handleClick} color="primary">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps, {
  addUrl,
  addToHistory,
  addToDeskHistory,
  changeTaskColor,
})(TaskPopup);
