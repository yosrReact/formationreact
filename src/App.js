import React from "react"
import logo from "./logo.svg"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import Task from "./components/task/Task"

function App() {
  const steps = ["Enter the task title", "Click on add task"]
  return (
    <div className="tasks-list" style={{ backgroundColor: "white" }}>
      To add a task
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
      <TaskForm />
      <Task
        title="learn Html"
        duration={60}
        details={{ type: "basic", date: "2020-01-02" }}
      />
      <Task
        title="learn React"
        duration={120}
        details={{ type: "IT", date: "2020-02-10" }}
      />
      <Task
        title="learn Angular"
        duration={180}
        details={{ type: "IT", date: "2020-03-15" }}
      />
    </div>
  )
}

export default App
