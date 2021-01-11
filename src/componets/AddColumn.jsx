import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addColumn, addToDeskHistory } from '../store/reducers/tasksReducer';

function AddColumn(props) {
  const [open, setOpen] = useState(false);
  const [inputTextValue, setInputTextValue] = useState('');

  const handleChange = (e) => {
    setInputTextValue(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (inputTextValue !== '') {
      props.addColumn(inputTextValue);
      props.addToDeskHistory(
        'addColumn',
        inputTextValue,
        props.user[0].userName
      );
      setOpen(false);
    } else {
      setOpen(false);
    }
  };
  return (
    <div className="columnBackground">
      {!open && (
        <div className="card__textButton" onClick={() => setOpen(true)}>
          Добавить Колонку
        </div>
      )}
      {open && (
        <div>
          <textarea
            value={inputTextValue}
            onChange={handleChange}
            placeholder="Введите заголовок для этой колонки"
            className="card__input"
            type="text"
          />
          <button className="card__button" onClick={handleClick}>
            Добавить колонку
          </button>
          <button className="card__button" onClick={handleClose}>
            закрыть
          </button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps, { addColumn, addToDeskHistory })(
  AddColumn
);
