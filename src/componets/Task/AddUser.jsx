import React from 'react';
import Button from '@material-ui/core/Button';
import AddUserPopup from './AddUserPopup';

export default function AddUser(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('Никто не выбран');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (user) => {
    setSelectedValue(user);
    setOpen(false);
  };

  return (
    <div className="addUser">
      {props.task.users && (
        <div>
          {props.task.users.length !== 0 && (
            <span>Добавленные пользователи:</span>
          )}
          {props.task.users.map((user) => (
            <span className="addedUsers">{user}</span>
          ))}
        </div>
      )}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Добавить пользователя
      </Button>
      <AddUserPopup
        task={props.task}
        selectedValue={selectedValue}
        open={open}
        onChangeUser={handleChange}
      />
    </div>
  );
}

