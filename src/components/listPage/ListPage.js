import React, { useState, useEffect } from "react"
import "./ListPage.css"
import TaskForm from "../taskForm/TaskForm"
import TasksList from "../tasksList/TasksList"
import Menu from "./../menu/Menu"
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/tasks'

import {
  fetchTasks,
  fetchTasksByFilter,
  addTask as addTaskFromService,
  deleteTask as deleteTaskFromService,
  updateTask as updateTaskFromService,
} from "../../services/tasks.service"

function ListPage() {
  const tasks = useSelector((state) => state.tasks)

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  // const [tasks, setTasks] = useState([])

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  // 2ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     try {
  //       const result = await fetchTasks()
  //       setTasks(result)
  //       setLoading(false)
  //     } catch (e) {
  //       console.log("error")
  //       setLoading(false)
  //     }
  //   }
  //   console.log("useEffect")
  //   fetchData()
  // }, [])
  useEffect(() => {
    dispatch(actions.fetchTasks())
  }, [])

  const addTask =  (title, duration) => {
    dispatch(actions.addTask({ title, duration }))

    // try {
    //   setLoading(true)
    //   const newTask = await addTaskFromService({
    //     title,
    //     duration,
    //   })
    //   setTasks([...tasks, newTask])
    //   setLoading(false)
    // } catch (e) {
    //   console.log("error")
    // }
  }
  const deleteTask =  (id) => {
    dispatch(actions.deleteTask(id))

    // try {
    //   setLoading(true)
    //   await deleteTaskFromService(id)
    //   const newTasks = tasks.filter((task) => task.id !== id)
    //   setTasks(newTasks)
    //   setLoading(false)
    // } catch (e) {
    //   console.log("error")
    // }
  }

  const updateTask = async (id, title, duration) => {
    dispatch(actions.updateTask(id, { title, duration }))
  
    // try {
    //   setLoading(true)
    //   const newTask = await updateTaskFromService(id, {
    //     title,
    //     duration,
    //   })
    //   const newTasks = tasks.map((task) => (task.id === id ? newTask : task))
    //   setTasks(newTasks)
    //   setLoading(false)
    // } catch (e) {
    //   console.log("error")
    // }
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
              tasks={tasks.list}
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
