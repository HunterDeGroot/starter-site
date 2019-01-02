import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import counterReducer from './Counter/counterReducer';
import globalsReducer from './globalsReducer';

const rootReducer = history =>
  combineReducers({
    globals: globalsReducer,
    count: counterReducer,
    router: connectRouter(history)
  });

export default rootReducer;
