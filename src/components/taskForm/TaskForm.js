import React from 'react'
import './TaskForm.css'
export default function TaskForm(props) {
  props.sayHello()
  const addTask="Add a task"
    return (
      <div className="task-form">
        <input type="text" name="task" id="" />
        <button className="button">{addTask}</button>
      </div>
    )
}
