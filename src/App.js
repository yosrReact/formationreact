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

function App() {
  return (
    <div className="app">
     
        <Router>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/hello" />
            </Route>
            <Route exact path="/hello">
              <Hello value="This is an application of redux toolkit on counter example" />
            </Route>

            <Route exact path="/tasks">
              <ListPage />
            </Route>

          

            <Route path="/">
              <Hello value="Welcome to my web site" />
            </Route>
          </Switch>
        </Router>
    </div>
  )
}

export default App
