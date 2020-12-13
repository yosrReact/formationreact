import React from "react"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import TasksList from "./components/tasksList/TasksList"

function App() {
  const steps = ["Enter the task title", "Click on add task"]
  const tasks = [
    {
      id: "1",
      title: "Learn html",
      duration: 60,
      type: "beginner",
      date: "05/04/2020",
      description:
        "HTML is the standard markup language for documents designed to be displayed in a web browser"
    },
    {
      id: "2",
      title: "Learn react",
      duration: 30,
      type: "intermediate",
      date: "05/04/2020",
      description: "React is a JavaScript library created by Facebook"
    },
    {
      id: "3",
      title: "Learn node",
      duration: 50,
      type: "Advanced",
      date: "05/04/2020",
      description: "Node.js is an open source server environment; Node.js is free"
    }
  ]
  const sayHello = () =>{alert("Hello")}
  return (
    <div className="tasks-list" style={{ backgroundColor: "white" }}>
      To add a task
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
      <TaskForm sayHello={sayHello} />
      <TasksList tasks={tasks} />
    </div>
  )
}

export default App
