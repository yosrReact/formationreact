import React, { useState } from "react"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import TasksList from "./components/tasksList/TasksList"

function App() {
  let loading = false
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const tasks= [
    {
      id: "1",
      title: "Learn html",
      duration: 60,
    },
    {
      id: "2",
      title: "Learn react",
      duration: 30,
    },
    {
      id: "3",
      title: "Learn node",
      duration: 50,
    },
  ]

  
  return (
    <div className="app">
      <div className="toggle">
        {/* 1ère solution */}
        <button onClick={() => toggleVisibility()}>Toggle visibility</button>
        {/* 2ème solution */}
        {/* <button onClick={toggleVisibility}>Toggle visibility</button> */}
      </div>
      <div>
        {loading && <div>Loading ... </div>}
        {!loading && isVisible && (
          <div>
            <TaskForm />
            {<TasksList tasks={tasks} />}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
