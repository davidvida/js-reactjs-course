import { SET_LOADER } from "./ui";

// feature name
export const TASKS = '[TASKS]';

// action types
// command actions
export const FETCH_TASKS = `${TASKS} FETCH`;
// document actions
export const SET_TASKS = `${TASKS} SET`;
export const POST_TASK = `${TASKS} POST`;
export const PUT_TASK = `${TASKS} PUT`;

export const fetchTasks = ({query}) => ({
  type: FETCH_TASKS,
  payload: query
});

export const setTasks = ({list}) => ({
  type: SET_TASKS,
  payload: list
});

export const postTask = ({item}) => ({
  type: POST_TASK,
  payload: item
});

export const putTask = ({taskId, item}) => ({
  taskId: taskId,
  type: PUT_TASK,
  payload: item
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