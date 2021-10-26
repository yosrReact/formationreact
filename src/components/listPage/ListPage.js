import React, { useState, useEffect } from "react"
import "./ListPage.css"
import TasksList from "../tasksList/TasksList"
import Menu from "./../menu/Menu"
import { useDispatch, useSelector } from "react-redux"
import {fetchTasks} from '../../redux/reducers/tasks'



function ListPage() {
  const tasks = useSelector((state) => state.tasks)
  console.log('tasks: ', tasks);

  const dispatch = useDispatch()

  const [loading] = useState(false)

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])


  return (
    <div className="list-view">
      <Menu />
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      <div>
        <div>

          {tasks.loading && <div>Loading ... </div>}
          {!tasks.loading && isVisible && (
            <TasksList
              tasks={tasks.list}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ListPage
