import { SET_LOADER } from "./ui";

// feature name
export const TASKS = '[TASKS]';

// action types
// command actions
export const FETCH_TASKS = `${TASKS} FETCH`;
export const API_POST_TASK = `${TASKS} API_POST_TASK`;
export const API_PUT_TASK = `${TASKS} API_PUT_TASK`

// document actions
export const SET_TASKS = `${TASKS} SET`;
export const ADD_TASK = `${TASKS} ADD_TASK`;
export const UPDATE_TASK = `${TASKS} UPDATE_TASK`
export const SET_SHOW_TASK_FORM = `${TASKS} SET_SHOW_TASK_FORM`;

export const fetchTasks = ({query}) => ({
  type: FETCH_TASKS,
  payload: query
});

export const apiPostTask = (task) =>  {
  return {
    type: API_POST_TASK,
    payload: task,
  }
};

export const apiPutTask = (task) => ({
  type: API_PUT_TASK,
  payload: task,
});

export const setTasks = ({list}) => ({
  type: SET_TASKS,
  payload: list
});

export const addTask = ({task}) => {
  return {
    type: ADD_TASK,
    payload: task,
  }
};

export const updateTask = ({task}) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  }
};

export const setShowTaskForm = (showTaskForm) => ({
  type: SET_SHOW_TASK_FORM,
  payload: showTaskForm
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