import React from "react"
import Task from "./../task/Task"
import "./TasksList.css"

export default function TasksList({tasks}) {


  return (
    <div className="tasks-list">
      <div className="toggle">
      </div>
      <div>
     
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              duration={task.duration}
            />
          ))}
      </div>
    </div>
  )
}
