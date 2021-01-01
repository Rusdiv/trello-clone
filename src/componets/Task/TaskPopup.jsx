import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import { connect } from 'react-redux';
import { addUrl } from '../../store/reducers/tasksReducer';
import AddUrl from './AddUrl';

function TaskPopup(props) {
  const [urlValue, setUrlValue] = useState('');

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <AddUrl urlValue={urlValue} urls={props.urls} setUrlValue={setUrlValue} />
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Закрыть
        </Button>
        <Button
          onClick={() => props.addUrl(urlValue, props.taskId)}
          color="primary"
        >
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect(null, { addUrl })(TaskPopup);
