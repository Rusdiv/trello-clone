import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addUserToTask,
  addToDeskHistory,
} from '../../store/reducers/tasksReducer';

function AddUserPopup(props) {
  const { onChangeUser, selectedValue, open } = props;

  const newUsers = props.users.filter(
    (user) => !props.task.users.includes(user)
  );

  const handleClose = () => {
    onChangeUser(selectedValue);
  };
  const handleListItemClick = (value) => {
    onChangeUser(value);
    props.addUserToTask(props.task.id, value);
    props.addToDeskHistory(
      'addUser',
      props.task.content,
      props.user[0].userName
    );
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Выбрать пользователя</DialogTitle>
      <List>
        {newUsers.map((user) => (
          <ListItem button onClick={() => handleListItemClick(user)} key={user}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.tasksReducer.users,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps, { addToDeskHistory, addUserToTask })(
  AddUserPopup
);

AddUserPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
