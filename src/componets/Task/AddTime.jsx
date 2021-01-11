import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addTime, addToDeskHistory } from '../../store/reducers/tasksReducer';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '20px',
    marginTop: '15px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function AddTime(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    props.addTime(props.task.id, e.target.value);
    props.addToDeskHistory('addTime', props.task.content, props.userName);
  };

  return (
    <div className={classes.container}>
      {props.task.time && <div>Назначенное время:{props.task.time}</div>}
      {props.task.time && (
        <div>
          {!open && (
            <Button
              onClick={() => setOpen(true)}
              variant="outlined"
              color="primary"
            >
              Изменить время
            </Button>
          )}
        </div>
      )}
      {open && (
        <TextField
          id="date"
          label="Add Time"
          type="date"
          onChange={handleChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.authReducer.user.userName,
  };
};

export default connect(mapStateToProps, { addTime, addToDeskHistory })(AddTime);
