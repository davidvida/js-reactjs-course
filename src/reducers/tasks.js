// reducer for UI

import { ADD_TASK, SET_SHOW_TASK_FORM, SET_TASKS, UPDATE_TASK } from '../actions/tasks';
import initialState from './initialState';

const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case SET_TASKS:
      return {
        ...state,
        data: action.payload
      };
    case ADD_TASK:
      let newTasks = [...state.data];
      newTasks.push(action.payload);
      return {
        ...state,
        data: newTasks
      }
    case UPDATE_TASK:
      const updatedTasks = state.data.map((task) => {
        if (task._id === action.payload._id) {
          task.completed = action.payload.completed;
        }
        return task;
      });
      return {
        ...state,
        data: updatedTasks
      };
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
