// reducer for UI

import { ADD_TASKS, SET_TASKS, PUT_TASK, DASHBOARD_TASKS } from '../actions/tasks';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_TASKS:
      return {
        ...state,
        data: action.payload
      };
    case ADD_TASKS:
      return {
        ...state,
        data: action.payload
      };
    case PUT_TASK:
      return {
        ...state,
        data: action.payload
      };
    case DASHBOARD_TASKS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default tasksReducer;
