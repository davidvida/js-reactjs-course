import { apiStart, apiPost, API_FAILURE, API_SUCCESS, POST_SUCCESS } from "../actions/api";
import { FETCH_TASKS, setTasks, addTasks, ADD_TASKS, SET_TASKS } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

// const TASKS_API_GET = "http://localhost:3000/data/tasks.json";
const TASKS_API_GET = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";

export const tasksMiddleware = () => (next) => (action) => {
  // next(action);
  switch(action.type) {
    case FETCH_TASKS:
      next(apiStart({body: null, method: 'GET', url: TASKS_API_GET}));
      next(setLoader(true));
      break;
    case ADD_TASKS:
      next(apiPost({body: action.payload, method: 'POST', url: TASKS_API_GET}));
      break;
    case API_SUCCESS:
      next(setTasks({list: action.payload}));
      next(setLoader(false));
      break;
    case POST_SUCCESS:
      next(setNotification({message: 'Task added successfully', type: 'success'}));
      next(apiStart({body: null, method: 'GET', url: TASKS_API_GET}));
      next(setLoader(true));
      break;
    case API_FAILURE:
      next(setNotification({error: action.payload}));
      next(setLoader(false));
      break;
  }
};
