import React, { useEffect, useState } from "react"
import "./Task.css"
import { Link } from "react-router-dom"
import { useHistory /*, Redirect*/ } from "react-router-dom"

export default function Task({
  id,
  title,
  duration,
  deleteTask,
  updateTask,
  setSelectedName,
}) {
  const [updateMode, setUpdateMode] = useState(false)
  const [titleToUpdate, setTitleToUpdate] = useState(title)
  const [durationToUpdate, setDurationToUpdate] = useState(duration)
  const handleUpdateTask = () => {
    updateTask(id, titleToUpdate, durationToUpdate)
    setUpdateMode(false)
  }
  //1ère forme de useEffect
  useEffect(() => {
    // console.log("hello")
    document.title = title
    // setTitle("hello"+ Math.random())
  })
  const history = useHistory()
  const handleDetails = () => {
    history.push(`/tasks/${id}`)
  }
  useEffect(() => {
    if (updateMode === true) {
      setSelectedName(titleToUpdate)
    } else {
      setSelectedName("")
    }
  }, [updateMode])

  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div onClick={handleDetails} className="link">
            {/* <Link to={`/tasks/${id}`}> */}
            <div className="title">
              {title} ({duration} mn)
            </div>
            {/* </Link> */}
          </div>
          <div className="actions">
            <div>
              <button onClick={() => deleteTask(id)}>delete</button>
              <button onClick={() => setUpdateMode(true)}>update</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={(e) => setTitleToUpdate(e.target.value)}
          />
          <input
            type="number"
            value={durationToUpdate}
            name="duration"
            onChange={(e) => setDurationToUpdate(e.target.value)}
          />
          <button className="button" onClick={handleUpdateTask}>
            Update a task
          </button>
        </div>
      )}
    </div>
  )
}
