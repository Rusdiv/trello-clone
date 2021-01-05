import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import TaskPopup from './TaskPopup';

import clipSvg from '../../assets/images/clip.svg';

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
  const [taskOpen, setTaskOpen] = React.useState(false);

  const handleOpen = () => {
    setTaskOpen(true);
  };

  const handleClose = () => {
    setTaskOpen(false);
  };

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <Container
          onClick={handleOpen}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.task.color && (
            <div
              className="task__color"
              style={{ backgroundColor: props.task.color }}
            ></div>
          )}
          {props.task.content}
          {props.task.url.length >= 1 && (
            <p className="task__clip">
              <img className="task__clip-img" src={clipSvg} alt="clipSvg" />
              {props.task.url.length}
            </p>
          )}
          {taskOpen && (
            <TaskPopup
              task={props.task}
              handleClose={handleClose}
              open={taskOpen}
              urls={props.task.url}
              taskId={props.task.id}
            />
          )}
        </Container>
      )}
    </Draggable>
  );
}
