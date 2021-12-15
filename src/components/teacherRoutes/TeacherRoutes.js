import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom"
import Hello from "../hello/Hello"
import ListPage from "../listPage/ListPage"
import Menu from "../menu/Menu"

function TeacherRoutes() {
  // useRouteMatch()
  // useLocation()
  console.log('useLocation(): ', useLocation());
  console.log('useRouteMatch(): ', useRouteMatch());
  const { path } = useRouteMatch()
  console.log('path: ', path);
  return (
    <>
      <Menu />
      <Switch>
        {/* <Route exact path={"/"+path+"/hello"}> */}
        <Route exact path={`${path}/hello`}>
          <Hello value="Welcome to my web site" />
        </Route>
        <Route exact path={`${path}/tasks`}>
          <ListPage />
        </Route>
      </Switch>
      azertyui
    </>
  )
}
export default TeacherRoutes
