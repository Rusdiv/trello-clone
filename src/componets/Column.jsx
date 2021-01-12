import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task/Task';
import ColumnInput from './ColumnInput';
import { connect } from 'react-redux';

const Container = styled.div`
  min-width: 272px;
  width: 272px;
  margin: 8px;
  border-radius: 3px;
  background-color: #ebecf0;
`;
const Title = styled.h2`
  padding: 10px 8px;
  font-size: 20px;
  margin: 0;
  color: #172b4d;
`;
const TaskList = styled.div`
  padding: 8px;
`;

function Column(props) {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, index) => (
              <Task key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      {props.isAdmin && (
        <ColumnInput columnId={props.column.id} title={props.column.title} />
      )}
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    isAdmin: state.authReducer.isAdmin,
  };
};
export default connect(mapStateToProps)(Column);
