// reducer for UI
import { SET_DATA, ADD_TASK, SET_FILTER, SET_TIMER } from "../actions/task";
import initialState from "./initialState";

const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_TASK:{
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case SET_FILTER:{
      return {
        ...state,
        filterApplied: action.payload,
      };
    }
    case SET_TIMER:{
      return {
        ...state,
        hideTimer: action.payload,
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
