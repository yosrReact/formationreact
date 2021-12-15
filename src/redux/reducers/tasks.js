import * as types from "../types"

const initState = { list: [], loading: false, error:false }

export const tasks = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_REQUEST:
      return { ...state, loading: true, error: false }

    case types.FETCH_TASKS_SUCCESS:
      return { ...state, list: action.listTasks, loading: false  }
    case types.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: true }
    case types.ADD_TASK:
      return { ...state, list: state.list.concat(action.task) }
    case types.UPDATE_TASK:
      const newList = state.list.map((elem) => {
        if (elem.id === action.id) {
          return action.task
        }
        return elem
      })
      return { ...state, list: newList }
    case types.DELETE_TASK:
      return {
        ...state,
        list: state.list.filter((elem) => elem.id !== action.id),
      }
    default:
      return state
  }
}
