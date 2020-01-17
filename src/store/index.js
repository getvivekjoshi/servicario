import { createStore, combineReducers } from 'redux'
import serviceApp from 'reducers';


const logger = store => nextDispatch => action => {
  console.group(action.type)
  console.log('%c prev state', 'color:grey', store.getState())
  console.log('%c action', 'color:blue', action)
  const returnvalue = nextDispatch(action)
  console.log('%c next state', 'color:green', store.getState())
  console.groupEnd(action.type)
  return returnvalue
}



// actions | action creators
// dispatch
// reducers
// connect

const promise = store => nextDispatch => action => {
  if (typeof action.then === 'function') {
    return action.then(nextDispatch)
  }
  return nextDispatch(action)
}




const applyMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch)
  })
}
const initStore = () => {

  const middlewares = [promise]

  const browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(serviceApp, browserSupport)

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  applyMiddlewares(store, middlewares)
  // store.dispatch = addPromiseToDispatch(store)

  return store
}

export default initStore