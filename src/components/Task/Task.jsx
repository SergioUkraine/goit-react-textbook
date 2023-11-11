import React from 'react';
import { MdClose } from 'react-icons/md';
import { Wrapper, CheckBox, Text, Button } from './Task.styled';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/actions';

function Task({ task }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <Wrapper>
      <CheckBox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <Button onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
}

export default Task;
