import React, { useState } from "react"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import TasksList from "./components/tasksList/TasksList"

function App() {
  let loading = false
  

  const [tasks, setTasks] = useState([
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
  ])

  
  return (
    <div className="app">
      {loading && <div>Loading ... </div>}
      {!loading && (
        <div>
          <TaskForm  />
          {<TasksList tasks={tasks} />}
        </div>
      )}
    </div>
  )
}

export default App
