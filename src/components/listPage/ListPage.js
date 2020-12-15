import React, { useState, useEffect } from "react"
import "./ListPage.css"
import TaskForm from "../taskForm/TaskForm"
import TasksList from "../tasksList/TasksList"
import Menu from "./../menu/Menu"
import {

  fetchTasks,
  fetchTasksByFilter,
  addTask as addTaskFromService,
  deleteTask as deleteTaskFromService,
  updateTask as updateTaskFromService,
} from "../../services/tasks.service"

function ListPage() {
  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState([])


  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  // 2ème forme de useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchTasks()
      setTasks(result)
      setLoading(false)
    }
    console.log("useEffect")

    fetchData()
  }, [])

  

  const addTask = async (title, duration) => {
    try {
      const newTask = await addTaskFromService(title, duration)
      setTasks([...tasks, newTask])
    } catch (e) {
      console.log("error")
    }
  }
  const deleteTask = async (id) => {
    try {
      await deleteTaskFromService(id)
      const newTasks = tasks.filter((task) => task.id !== id)
      setTasks(newTasks)
    } catch (e) {
      console.log("error")
    }
  }

  const updateTask = async (id, title, duration) => {
    try {
      const newTask = await updateTaskFromService(id, title, duration)
      const newTasks = tasks.map((task) => (task.id === id ? newTask : task))
      setTasks(newTasks)
    } catch (e) {
      console.log("error")
    }
  }

  return (
    <div className="list-view">
      <Menu />
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      <div>
        <div>
          <TaskForm addTask={addTask} />

          {loading && <div>Loading ... </div>}
          {!loading && isVisible && (
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ListPage
