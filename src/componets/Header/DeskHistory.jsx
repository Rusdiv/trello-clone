import React from 'react';
import { connect } from 'react-redux';

function DeskHistory(props) {
  return (
    <div>
      <h3 className="DeskTitle">История доски:</h3>
      {props.history.map((item) => (
        <div className="DeskHistory">
          <div>{item.text}</div>
          <div>{item.time}</div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.tasksReducer.history,
  };
};

export default connect(mapStateToProps)(DeskHistory);
