import { SET_LOADER } from "./ui";

// feature name
export const TASKS = '[TASKS]';

// action types
// command actions
export const FETCH_TASKS = `${TASKS} FETCH`;

export const ADD_TASKS = `${TASKS} ADD `;
// document actions
export const SET_TASKS = `${TASKS} SET`;

export const SEARCH_TASKS = `${TASKS} SEARCH`;

export const UPDATE_TASKS = `${TASKS} UPDATE`;

export const FILTER_TASKS = `${TASKS} FILTER`;

export const TIMER_TASKS = `${TASKS} TIMER`;

export const fetchTasks = ({query}) => ({
  type: FETCH_TASKS,
  payload: query
});

export const setTasks = ({list}) => ({
  type: SET_TASKS,
  payload: list
});

export const addTasks = ({task}) => ({
  type: ADD_TASKS,
  payload: task
});

export const searchTasks = ({task}) => ({
  type: SEARCH_TASKS,
  payload: task
});

export const updateTasks = ({task}) => ({
  type: UPDATE_TASKS,
  payload: task
});

export const filterTasks = ({task}) => ({
  type: FILTER_TASKS,
  payload: task
});

export const timerTasks = ({timer}) => ({
  type: TIMER_TASKS,
  payload: timer
});

/*
FETCH_TASKS -> API_START  -> API_SUCCESS -> SET_TASKS
               SET_LOADER                   SET_LOADER
                          -> API_FAILURE -> SET_NOTIFICATION
                                            SET_LOADER
*/


/*
POST_TASK ->  API_START  -> API_SUCCESS -> ADD_TASK
                          -> API_FAILURE -> SET_NOTIFICATION
*/