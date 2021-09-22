import React, { useEffect, useState } from "react"
import { fetchTaskById } from "../../services/tasks.service"
import { useParams, useLocation } from "react-router-dom"
 import { useDispatch } from "react-redux"
import * as actions from "../../redux/actions/tasks"

import './TaskDetails.css'
import Menu from './../menu/Menu';
function TaskDetails() {
  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState({})
   const dispatch = useDispatch()
 
  const { taskId } = useParams()
  console.log('useParams(): ', useParams());
  console.log('useLocation(): ', useLocation());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchTaskById(taskId)
      setTask(result)
      setLoading(false)
    }
    fetchData()
  }, [taskId])

  useEffect(() => {
    dispatch(actions.setSelectedTaskName(task.title))
  }, [task])
  return (
    <div className="task-details">
      <Menu />
      <div className="header">Task details</div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div className="title">Title</div>
          <div className="value">{task.title}</div>

          <div className="title">Title</div>
          <div className="value">{task.duration}</div>
        </>
      )}
    </div>
  )
}

export default TaskDetails
