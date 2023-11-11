import React from 'react';
import { Wrapper, Text } from './TaskCounter.styled';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';

function TaskCounter() {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <Wrapper>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </Wrapper>
  );
}

export default TaskCounter;
