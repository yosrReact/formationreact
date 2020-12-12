import React from 'react'
import './Task.css'
export default function Task(props) {  
  const renderActions = ()=>{
    return (
      <div className="actions">
        <span>delete</span>
        <span>update</span>
      </div>
    )
  }
    return (
      <div className="task">
        <div className="title">{props.title}</div>
        <div className="sub-title">{props.details.type} ({props.details.date})</div>

        {renderActions()}
      </div>
    )
}


