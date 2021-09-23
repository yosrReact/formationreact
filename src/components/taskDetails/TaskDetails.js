import React, { useEffect, useState } from "react"
import { fetchTaskById } from "../../services/tasks.service"
import { useParams, useLocation } from "react-router-dom"
import './TaskDetails.css'
import Menu from './../menu/Menu';
function TaskDetails({ setSelectedName, selectedTaskName }) {
  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState({})

  const { taskId } = useParams()
  console.log("useParams(): ", useParams())
  console.log("useLocation(): ", useLocation())

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
    setSelectedName(task.title)
     return () => {
        setSelectedName("")
     }
  }, [task])

  return (
    <div className="task-details">
      <Menu selectedTaskName={selectedTaskName} />
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
