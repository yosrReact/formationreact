import * as types from "../../types"
import { FETCH_TASKS, UPDATE_TASK } from "./../../types/index"
import {
  deleteTask as deleteTaskFormService,
  fetchTasks as fetchTasksFromService,
  addTask as addTaskFromService,
  updateTask as updateTaskFormService,
} from "./../../../services/tasks.service"
export const addTask = (task) => {
  const newTask = addTaskFromService(task)
  return {
    type: types.ADD_TASK,
    task: newTask,
  }
}

export function fetchTasks() {
  return async function (dispatch) {
    try {
      dispatch({
        type: types.FETCH_TASKS_REQUEST,
      })
      const listTasks = await fetchTasksFromService()
      dispatch({
        type: types.FETCH_TASKS_SUCCESS,
        listTasks: listTasks,
      })
    } catch (e) {
      dispatch({
        type: types.FETCH_TASKS_FAILURE,
      })
    }
  }
}

// export const fetchTasks = async () => {
//   const listTasks = await fetchTasksFromService()
//   return {
//     type: types.FETCH_TASKS,
//     listTasks: listTasks,
//   }
// }

export const updateTask = (id, task) => {
  const newTask = updateTaskFormService(id, task)
  return {
    type: types.UPDATE_TASK,
    task: newTask,
    id: id,
  }
}

export const deleteTask = (id) => {
  deleteTaskFormService(id)
  return {
    type: types.DELETE_TASK,
    id: id,
  }
}
