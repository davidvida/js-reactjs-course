// reducer for UI

import { SET_TASKS } from '../actions/tasks';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_TASKS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default tasksReducer;
