import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import questionReducer from '../reducers';

export default createStore(questionReducer, applyMiddleware(thunk));



