// reducer for UI

import { SET_TASKS, POST_TASK, PUT_TASK, USER_TASKS } from '../actions/tasks';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_TASKS:
      return {
        ...state,
        data: [...action.data.response]
      };
    case USER_TASKS:
      console.log('user task - state:',state)
      console.log('user task - action:',action)
      return {
        ...state,
        data: [...action.data]
      };      
    case POST_TASK:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case PUT_TASK:
      const taskListUpdated = state.data.map((task) =>
        task._id === action.payload._id ? { ...task, ...action.payload } : task
      );
      return {
        ...state,
        data: [...taskListUpdated],
      };
    default:
      return state;
  }
};

export default tasksReducer;
