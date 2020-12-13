import React, { useState } from "react"
import "./TaskForm.css"
function TaskForm({ addTask}) {
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState(0)
  const handleAddTask = () => {
    addTask(title, duration)
    setTitle("")
    setDuration(0)
  }

  return (
    <div className="task-form">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        value={duration}
        name="duration"
        onChange={(e) => setDuration(e.target.value)}
      />
      <button className="button" onClick={handleAddTask}>
        Add a task
      </button>
    </div>
  )
}
export default TaskForm
