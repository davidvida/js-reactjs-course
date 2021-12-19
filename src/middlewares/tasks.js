import { apiStart, API_FAILURE, API_SUCCESS } from "../actions/api";
import { FETCH_TASKS, setShowTaskForm, setTasks, SET_SHOW_TASK_FORM } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API_GET = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch(action.type) {
    case FETCH_TASKS:
      next(apiStart({body: null, method: 'GET', url: TASKS_API_GET}));
      next(setLoader(true));
      break;
    case API_SUCCESS:
      next(setTasks({list: action.payload}));
      next(setLoader(false));
      break;
    case API_FAILURE:
      next(setNotification({error: action.payload}));
      next(setLoader(false));
      break;
    case SET_SHOW_TASK_FORM:
      next(setShowTaskForm(action.payload));
      break;
  }
};
