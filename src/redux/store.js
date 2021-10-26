/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose } from "redux"
// import logger from "redux-logger"

import thunk from "redux-thunk"
// import rootReducer from "./reducers"
// import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from "./reducers/tasks"
import counterReducer from "./reducers/counter"

// export const configureStore = () => {
//   const middlewares = [thunk]
//   const composeEnhancers =
//     process.env.NODE_ENV !== "production"
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//       : compose
//   return createStore(
//     rootReducer(),
//     composeEnhancers(applyMiddleware(...middlewares))
//   )
// }

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    counter: counterReducer
  },
})

export default store
