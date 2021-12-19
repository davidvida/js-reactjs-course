// reducer for UI

import { ADD_TASK, SET_SHOW_TASK_FORM, SET_TASKS } from '../actions/tasks';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_TASKS:
      return {
        ...state,
        data: action.payload
      };
    case ADD_TASK:
      let newTasks = [...state.tasks.data];
      newTasks.push(action.payload);
      return {
        ...state,
        data: newTasks
      }
    case SET_SHOW_TASK_FORM:
      return {
        ...state,
        showTaskForm: action.payload
      };
    default:
      return state;
  }
};

export default tasksReducer;
