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
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/tasks'

function ListPage({ selectedTaskName, setSelectedName }) {
  // const [loading, setLoading] = useState(false)
  // const [tasks, setTasks] = useState([])
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)
  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  // 2ème forme de useEffect
  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true)
    //   try {
    //     const result = await fetchTasks()
    //     setTasks(result)
    //     setLoading(false)
    //   } catch (e) {
    //     console.log("error")
    //     setLoading(false)
    //   }
    // }
    // console.log("useEffect")
    // fetchData()
    dispatch(actions.fetchTasks())
  }, [])

  const addTask = async (title, duration) => {
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
    dispatch(actions.addTask({title, duration}))
  }
  const deleteTask =  (id) => {
    // try {
    //   setLoading(true)
    //   await deleteTaskFromService(id)
    //   const newTasks = tasks.filter((task) => task.id !== id)
    //   setTasks(newTasks)
    //   setLoading(false)
    // } catch (e) {
    //   console.log("error")
    // }
    dispatch(actions.deleteTask(id))

  }

  const updateTask = async (id, title, duration) => {
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
    dispatch(actions.updateTask(id, {title, duration}))

  }

  return (
    <div className="list-view">
      <Menu selectedTaskName={selectedTaskName} />
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      <div>
        <div>
          <TaskForm addTask={addTask} />

          {tasks.loading && <div>Loading ... </div>}
          {!tasks.loading && isVisible && (
            <TasksList
              tasks={tasks.list}
              deleteTask={deleteTask}
              updateTask={updateTask}
              setSelectedName={setSelectedName}
            />
          )}
          {tasks.error && <div>error...</div>}
        </div>
      </div>
    </div>
  )
}

export default ListPage
