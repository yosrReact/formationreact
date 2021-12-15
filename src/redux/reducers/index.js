import { tasks } from './tasks';
import { combineReducers } from 'redux';

export const rootReducers =()=>{
    return  combineReducers({
    tasks: tasks,
  })
}