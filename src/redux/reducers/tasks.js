import * as types from "../types"

const initState = { list: [] }

export const tasks = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS:
      return { ...state, list: action.listTasks }
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
      return { ...state, list: state.list.filter(elem=>elem.id!==action.id) }
    default:
      return state
  }
}
