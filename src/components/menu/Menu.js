import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Menu.css"
function Menu() {
  return (
    <ul>
      <li>
        <NavLink to="/teacher/hello" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/teacher/tasks"> My tasks</NavLink>
      </li>
    </ul>
  )
}
{
  /* <NavLink to="/tasks" activeClassName="actives">
          My tasks
        </NavLink> */
}
{
  //  isActive={(_, { pathname }) =>
  //   pathname.match("/hello") || pathname === "/"
  // }
  /* <NavLink
          to="/hello"
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/hello") ||
            pathname==="/"
          }
        >
          Home
        </NavLink> */
}
export default Menu
