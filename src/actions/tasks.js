import { SET_LOADER } from "./ui";

export const TASKS = '[TASKS]';
export const FETCH_TASKS = `${TASKS} FETCH`;
export const SET_TASKS = `${TASKS} SET`;
export const POST_TASK = `${TASKS} POST`;
export const PUT_TASK = `${TASKS} PUT`;
export const ADD_NEW_TASK = `${TASKS} ADD`;

export const fetchTasks = ({ query }) => ({
  type: FETCH_TASKS,
  payload: query
});

export const setTasks = ({ list }) => ({
  type: SET_TASKS,
  payload: list
});

export const postTask = ({ task }) => ({
  type: POST_TASK,
  payload: task
});

export const putTask = ({ task, paramId }) => ({
  type: PUT_TASK,
  payload: task,
  paramId: paramId
});

export const addNewTasks = ({ list }) => ({
  type: ADD_NEW_TASK,
  payload: list
});