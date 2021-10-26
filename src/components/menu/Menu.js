import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Menu.css"
function Menu() {
    const task = useSelector((state) => state.tasks && state.tasks.selectedTask)

  return (
    <>
      {task.title}
      <ul>
        <li>
          <NavLink
            to="/hello"
            activeClassName="active"
            isActive={(_, { pathname }) =>
              pathname.match("/hello") || pathname === "/"
            }
          >
            Counter
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/tasks" activeClassName="active">
            My tasks
          </NavLink>
          {/* <Link to="/tasks"> My tasks</Link> */}
        </li>
      </ul>
    </>
  )
}

export default Menu
