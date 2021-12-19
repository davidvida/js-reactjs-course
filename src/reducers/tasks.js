// reducer for UI

import { ADD_TASKS, SET_TASKS, SEARCH_TASKS, TIMER_TASKS } from '../actions/tasks';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_TASKS:
      return {
        ...state,
        data: action.payload
      };
    case SEARCH_TASKS:
      return {
        ...state,
        searchTerm: action.payload
      };
    case TIMER_TASKS:
      return {
        hideTimer: action.payload
        };
    default:
      return state;
  }
};

export default tasksReducer;
