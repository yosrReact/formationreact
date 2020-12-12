import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/taskForm/TaskForm';
import Task from './components/task/Task';

function App() {
  const steps=["Enter the task title", "Click on add task"]
  return (
    <div className="tasks-list" style={{backgroundColor:"cyan"}}>
      To add a task 
      <ul>
        {steps.map(step=><li>{step}</li>)}
      </ul>
      <TaskForm />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default App;
