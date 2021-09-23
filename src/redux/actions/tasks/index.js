import * as types from "../../types"
import * as api from "../../../services/tasks.service"
export const setSelectedTask = (id) => ({
  type: types.SET_SELECTED_TASK,
  id
})

export const fetchTasks = () => {
  const tasks = api.fetchTasks()
  return {
    type: types.FETCH_TASKS,
    tasks,
  }
}

export const fetchTaskById = (id) => {
  const task = api.fetchTaskById(id)
  return {
    type: types.FETCH_TASK_BY_ID,
    task,
  }
}

export const addTask = (task) => {
  const newTask = api.addTask(task)

  return {
    type: types.ADD_TASK,
    task: newTask,
  }
}

export const updateTask = (id, task) => {
  const updatedTask = api.updateTask(id, task)

  return {
    type: types.UPDATE_TASK,
    id,
    task: updatedTask,
  }
}
export const deleteTask = (id) => {
  api.deleteTask(id)
  return {
    type: types.DELETE_TASK,
    id,
  }
}



