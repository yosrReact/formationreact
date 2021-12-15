import React, { useState, useEffect } from "react"
import "./App.css"
import ListPage from "./components/listPage/ListPage"
import Hello from "./components/hello/Hello"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import TaskDetails from "./components/taskDetails/TaskDetails"
import Menu from "./components/menu/Menu"
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes"
import StudentRoutes from './components/studentRoutes/StudentRoutes';

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Menu /> */}
        <Switch>
          <Route path="/teacher">
            <TeacherRoutes />
          </Route>
          <Route path="/student">
            <StudentRoutes />
          </Route>
          {/* <Route exact path="/">
            <Redirect to="/hello" />
          </Route>
           */}
          {/* <Route path="/teacher/hello">
            <Hello value="Welcome to my web site" />
          </Route>
          <Route exact path="/teacher/tasks">
            <ListPage />
          </Route>
          <Route path="/student/hello">
            <Hello value="Welcome to my web site" />
          </Route>

          <Route exact path="/tasks/:taskId">
            <TaskDetails />
          </Route>

          <Route path="/">
            <Hello value="Welcome to my web site" />
          </Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
