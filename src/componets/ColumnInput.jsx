import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../store/reducers/tasksReducer';

function ColumnInput(props) {
  const [inputVisibility, setInputVisibility] = useState(false);
  const [inputTextValue, setInputTextValue] = useState('');

  const handleChange = (e) => {
    setInputTextValue(e.target.value);
  };

  const handleClose = () => {
    setInputVisibility(false);
  }

  const handleClick = () => {
    if (inputTextValue !== '') {
      props.addNewTask(inputTextValue, props.columnId, props.title);
      setInputVisibility(false);
    } else {
      setInputVisibility(false);
    }
  };

  return (
    <div>
      {!inputVisibility && (
        <div
          className="card__textButton"
          onClick={() => setInputVisibility(true)}
        >
          Добавить карточку
        </div>
      )}
      {inputVisibility && (
        <div>
          <textarea
            value={inputTextValue}
            onChange={handleChange}
            placeholder="Введите заголовок для этой карточки"
            className="card__input"
            type="text"
          />
          <button className="card__button" onClick={handleClick}>
            Добавить карточку
          </button>
          <button className="card__button" onClick={handleClose}>
            закрыть
          </button>
        </div>
      )}
    </div>
  );
}

export default connect(null, { addNewTask })(ColumnInput);
