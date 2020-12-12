import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/taskForm/TaskForm';
import Task from './components/task/Task';

function App() {
  return (
    <div className="tasks-list">
      <TaskForm />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default App;
