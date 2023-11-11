import React from 'react';
import Layout from './Layout';
import AppBar from './AppBar';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
}

export default App;
