import { apiStart, API_FAILURE, API_SUCCESS, apiPost, apiPut, apiUserGetTasks } from "../actions/api";
import { FETCH_TASKS, setTasks, POST_TASK, PUT_TASK, FETCH_USER_TASKS } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API_GET = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch(action.type) {
    case FETCH_TASKS:
      next(apiStart({body: null, method: 'GET', url: TASKS_API_GET, setList: (response) => setTasks(response)}));
      next(setLoader(true));
      break;
    case API_SUCCESS:
      next(action.meta({response: action.payload}));
      next(setLoader(false));
      break;
    case API_FAILURE:
      next(setNotification({error: action.payload}));
      next(setLoader(false));
      break;
    case POST_TASK:
      next(apiPost({body: action.payload, method: 'POST', url: TASKS_API_GET, setList: (response) => setTasks(response)}));
      break;
    case PUT_TASK:
      next(apiPut({body: action.payload, method: 'PUT', url: `${TASKS_API_GET}/${action.payload.id}`, setList: (response) => setTasks(response)}));
      break;
    case FETCH_USER_TASKS:
      console.log('FETCH_USER_TASKS: ', action)
      next(apiUserGetTasks({body: action.data, method: 'GET', url: TASKS_API_GET, setList: (response) => setTasks(response)}));
      next(setLoader(true));
      break;
  }
};
