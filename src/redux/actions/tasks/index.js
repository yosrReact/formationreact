import * as types from "../../types"

export const setSelectedTaskName = (name) => ({
  type: types.SET_SELECTED_TASK,
  selectedTaskName: name
})
