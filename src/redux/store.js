import { combineReducers } from "redux";
import { createStore } from "redux";
import { tasks } from './reducers/tasks';

export const store = createStore(
  combineReducers({
    tasks: tasks,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)