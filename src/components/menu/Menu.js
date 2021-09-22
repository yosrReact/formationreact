import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Menu.css"
function Menu() {
  const tasks = useSelector((state) => state.tasks)
  return (
    <>
      {tasks && tasks.selectedTaskName}
      <ul>
        <li>
          <NavLink
            to="/hello"
            activeClassName="active"
            isActive={(_, { pathname }) =>
              pathname.match("/hello") || pathname === "/"
            }
          >
            Home
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
