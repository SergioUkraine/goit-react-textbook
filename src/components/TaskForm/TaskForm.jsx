import React from 'react';
// Импортируем хук
import { useDispatch } from 'react-redux';
// Импортируем генератор экшена
import { addTask } from 'redux/actions';

import Button from 'components/Button';
import { Form, Input } from './TaskForm.styled';

function TaskForm() {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="text" palceholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
}

export default TaskForm;
