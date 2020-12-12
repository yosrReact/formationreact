import React from 'react'
import './Task.css'
export default function Task() {  
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
        <div className="title">Learn html</div>
        {renderActions()}
      </div>
    )
}
