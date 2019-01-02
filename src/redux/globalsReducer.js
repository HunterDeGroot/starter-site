import { TOGGLE_HEADER } from './globalAction';
import { merge } from 'lodash';

const initialState = {
  isOpen: false
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HEADER:
      const newState = {
        isOpen: !state.isOpen
      };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default globalReducer;
