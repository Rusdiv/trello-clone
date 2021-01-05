import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import { connect } from 'react-redux';
import { addUrl, addToHistory } from '../../store/reducers/tasksReducer';
import AddUrl from './AddUrl';
import TaskHistory from './TaskHistory';
import TaskColorPicker from './TaskColorPicker';

function TaskPopup(props) {
  const [urlValue, setUrlValue] = useState('');

  const addUrl = () => {
    props.addUrl(urlValue, props.taskId);
    props.addToHistory(props.taskId, 'Добавленна ссылка');
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <TaskColorPicker taskId={props.taskId} />
      <AddUrl urlValue={urlValue} urls={props.urls} setUrlValue={setUrlValue} />
      <TaskHistory task={props.task} />
      <DialogActions>
        <Button onClick={addUrl} color="primary">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect(null, { addUrl, addToHistory })(TaskPopup);
