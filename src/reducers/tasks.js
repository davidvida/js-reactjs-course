// reducer for UI
import { SET_DATA, SET_FILTERAPPLIED, SET_HIDETIMER } from '../actions/task';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      };
      case SET_FILTERAPPLIED:
      return {
        ...state,
        filterApplied: action.payload
      };
      case SET_HIDETIMER:
      return {
        ...state,
        hideTimer: action.payload
      };
    default:
      return state;
    }
};

export default tasksReducer;
