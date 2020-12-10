import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  padding: 5px;
`;

export default function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
}
