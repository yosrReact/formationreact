import * as types from "../types"

const initialState = {
  selectedTask: {},
  list: [
    // {
    //   id: "1",
    //   title: "Learn html",
    //   duration: 60,
    // },
    // {
    //   id: "2",
    //   title: "Learn react",
    //   duration: 30,
    // },
    // {
    //   id: "3",
    //   title: "Learn node",
    //   duration: 50,
    // },
  ],
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: state.list.find((task) => task.id === action.id) || {},
      }
    case types.FETCH_TASKS:
      // ne pas faire state.tasks=action.tasks
      return { ...state, list: [...action.tasks] }
      // return state

    case types.FETCH_TASK_BY_ID:
      return {
        ...state, selectedTask:action.task
      }

    case types.ADD_TASK:
      console.log(action)
      // ne pas faire state.list=[...state.list, {id: ""+(state.list.length+1), ...action.task}]
      // ou
      // state.list.push(
      //   { id: "" + (state.list.length + 1), ...action.task },
      // )
      // return state
      return {
        ...state,
        list: [
          ...state.list,
         action.task ,
        ], // or list: state.list.concat(action.task)
      }
   
    case types.UPDATE_TASK:
      const updatedTasks = state.list.map((task) => {
        if (task.id === action.id) {
          return action.task
        }
        return task
      })
      return { ...state, list: updatedTasks }

    case types.DELETE_TASK:
      const newTasks = state.list.filter((task) => task.id !== action.id)
      return { ...state, list: newTasks }
    default:
      return state
  }
}
export default tasks
