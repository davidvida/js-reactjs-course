// reducer for UI
import initialState from "./initialState";
import {
  SET_TASK_LIST,
  SET_TASK_FILTER,
  SET_TASK_HIDE_TIMER,
  ADD_TASKS,
} from "../actions/tasks";

const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case SET_TASK_LIST:
      return {
        ...state,
        data: action.data.list,
      };
      debugger;
    case SET_TASK_FILTER:
      return {
        ...state,
        filterApplied: action.filterApplied,
      };
    case SET_TASK_HIDE_TIMER:
      return {
        ...state,
        hideTimer: action.hideTimer,
      };
    case ADD_TASKS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
