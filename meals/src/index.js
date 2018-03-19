import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'


// window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)

  return result
}

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhance(
    applyMiddleware(logger)  
  )
)

ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
