/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose } from "redux"
// import logger from "redux-logger"

import thunk from "redux-thunk"
import rootReducer from "./reducers"
import { createStore } from "redux"

// console.log('createStore(rootReducer): ', createStore(rootReducer()).getState());
export const configureStore = () => {
  const middlewares = [thunk]
  const composeEnhancers =
    process.env.NODE_ENV !== "production"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose
  return createStore(
    rootReducer(),
    composeEnhancers(applyMiddleware(...middlewares))
  )
}

// export const history = createHistory()

// export const configureStore = () => {
//   const middlewares = [thunk, routerMiddleware(history)]
//   if (process.env.NODE_ENV !== "production") {
//     middlewares.push(logger)
//   }

//   const composeEnhancers =
//     process.env.NODE_ENV !== "production"
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//       : compose
//   return createStore(
//     createRootReducer(history),
//     composeEnhancers(applyMiddleware(...middlewares))
//   )
// }

// export default configureStore
