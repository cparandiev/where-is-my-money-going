import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(promiseMiddleware(), logger, thunk))

export default store