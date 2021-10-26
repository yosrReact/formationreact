import React, { useEffect, useState } from "react"
import "./Task.css"

export default function Task({ id, title, duration }) {

  useEffect(() => {
    document.title = title
  }) 
  return (
    <div className="task">
          <div className="title">
            {title} ({duration} mn)
          </div>
    </div>
  )
}
