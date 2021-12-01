// reducer for UI
import initialState from './initialState';
import { SET_FILTER, SET_LIST } from '../actions/task';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_LIST:
      return {
        ...state,
        data: action.data,
        filterApplied: action.filterApplied
      };
      case SET_FILTER:
      return {
        ...state,
        filterApplied: action.filterApplied
      };
    default:
      return state;
  }
};

export default tasksReducer;
