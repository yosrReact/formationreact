import tasks from "./tasks"
import { combineReducers } from "redux"

const rootReducer = () =>{
 return combineReducers({
    tasks,
  })
}

export default rootReducer
