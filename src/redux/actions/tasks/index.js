import * as types from "../../types"
import * as api from "../../../services/tasks.service"
export const setSelectedTask = (id) => ({
  type: types.SET_SELECTED_TASK,
  id
})

export const fetchTasks = () => async (dispatch) => {
   dispatch({
     type: types.FETCH_TASKS_REQUEST,
     
   })
      try {
        const tasks = await api.fetchTasks()
         dispatch({
           type: types.FETCH_TASKS_SUCCESS,
           tasks,
         })
      } catch (e) {
       dispatch({
         type: types.FETCH_TASKS_FAILURE,
       })
      }


 
 
}

export const fetchTaskById = (id) => async (dispatch) => {
  const task = await api.fetchTaskById(id)
  dispatch ( {
    type: types.FETCH_TASK_BY_ID,
    task,
  })
}

export const addTask = (task) => async (dispatch) => {
  const newTask = await api.addTask(task)

  dispatch({
    type: types.ADD_TASK,
    task: newTask,
  })
}

export const updateTask = (id, task) => async (dispatch) => {
  const updatedTask = await api.updateTask(id, task)

  dispatch ( {
    type: types.UPDATE_TASK,
    id,
    task: updatedTask,
  })
}
export const deleteTask = (id) => async (dispatch) => {
  await api.deleteTask(id)
  dispatch ( {
    type: types.DELETE_TASK,
    id,
  })
}



