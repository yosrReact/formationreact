import { applyMiddleware, compose, createStore } from "redux"
import { rootReducers } from "./reducers/index"
import thunk from "redux-thunk"
import logger from "redux-logger"
export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducers(),
    composeEnhancers(applyMiddleware(thunk, logger))
  )
  return store
}
