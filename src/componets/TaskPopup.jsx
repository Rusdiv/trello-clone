import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { connect } from 'react-redux';
import { addUrl } from '../store/reducers/tasksReducer';

function TaskPopup(props) {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        Добавить ссылку
        <TextField
          onChange={handleChange}
          value={url}
          autoFocus
          margin="dense"
          label="URL"
          fullWidth
        />
        {props.url && (
          <div>
            <p>Прикрепленные ссылки:</p>
            <a href={props.url}>{props.url}</a>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Закрыть
        </Button>
        <Button onClick={() => props.addUrl(url, props.taskId)} color="primary">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect(null, { addUrl })(TaskPopup);
