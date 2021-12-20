import { SET_LOADER } from "./ui";

// feature name
export const TASKS = '[TASKS]';

// action types
// command actions
export const FETCH_TASKS = `${TASKS} FETCH`;
export const POST_TASKS = `${TASKS} POST`;
export const PUT_TASKS = `${TASKS} PUT`;
// document actions
export const SET_TASKS = `${TASKS} SET`;

export const fetchTasks = ({query}) => ({
  type: FETCH_TASKS,
  payload: query
});

export const postTasks = ({data}) => ({
  type: POST_TASKS,
  payload: data
});

export const updateTasks = ({data}) => ({
  type: PUT_TASKS,
  payload: data
});

export const setTasks = ({list}) => ({
  type: SET_TASKS,
  payload: list
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