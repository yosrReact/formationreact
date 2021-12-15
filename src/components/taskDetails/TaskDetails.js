import React, { useEffect, useState } from "react"
import { fetchTaskById } from "../../services/tasks.service"
import { useParams, useLocation } from "react-router-dom"
import "./TaskDetails.css"
import Menu from "./../menu/Menu"
function TaskDetails() {
  // const [loading, setLoading] = useState(false)
  const [task, setTask] = useState({})

  // console.log('useParams(): ', useParams());
  // console.log('useLocation(): ', useLocation());

  const params = useParams()
  console.log("params: ", params)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTaskById(params.taskId)
      setTask(result)
    }
    fetchData()
  }, [])

  return (
    <div className="task-details">
      <div>{task.title}</div>
      <div>{task.duration}</div>
    </div>
  )
}

export default TaskDetails
