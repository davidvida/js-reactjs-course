import { SET_LOADER } from "./ui";

// feature name
export const TASKS = '[TASKS]';

export const USER_TASKS = `[USER_TASKS]`;

// action types
// command actions
export const FETCH_TASKS = `${TASKS} FETCH`;

export const FETCH_USER_TASKS = `${USER_TASKS} FETCH`;

export const PUT_TASK = `${TASKS} PUT`;

// document actions
export const SET_TASKS = `${TASKS} SET`;

export const ADD_TASKS = `${TASKS} ADD`;

export const DASHBOARD_TASKS = `${TASKS} DASHBOARD`;

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

export const fetchUserTasks = (query) => {
  return {
    type: FETCH_USER_TASKS,
    payload: query
  };
};

export const updateTask = ({task}) => ({
  type: PUT_TASK,
  payload: task
});

export const countTasks = ({list}) => ({
  type: DASHBOARD_TASKS,
  payload: list
});

/*
FETCH_TASKS -> API_START  -> API_SUCCESS -> SET_TASKS
               SET_LOADER                   SET_LOADER
                          -> API_FAILURE -> SET_NOTIFICATION
                                            SET_LOADER
*/

/*
FETCH_USER_TASKS -> API_START  -> API_SUCCESS -> SET_USER_TASKS
                    SET_LOADER                   SET_LOADER
                          -> API_FAILURE -> SET_NOTIFICATION
                                            SET_LOADER
*/

/*
DASHBOARD -> DASHBOARD_START -> API_SUCCESS -> DASHBOARD_TASKS
            SET_LOADER
                       -> API_FAILURE -> SET_NOTIFICATION
                                         SET_LOADER
*/


/*
POST_TASK ->  API_START  -> API_SUCCESS -> ADD_TASK
                          -> API_FAILURE -> SET_NOTIFICATION
*/