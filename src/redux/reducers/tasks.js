import * as types from "../types"

const initialState = {
  selectedTaskName: "",
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_TASK:
      return { ...state, selectedTaskName: action.selectedTaskName }
    default:
      return state
  }
}
export default tasks
