// reducer for UI

import { ADD_TASK, POST_TASK, SET_TASKS } from '../actions/tasks';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  console.log("============",action.type );
  switch(action.type) {
    
    case SET_TASKS:
      return {
        ...state,
        data: action.payload
      };

    case POST_TASK:
      return {
        ...state,
         data: action.payload
    };
    
    default:
      return state;
  }
};

export default tasksReducer;
