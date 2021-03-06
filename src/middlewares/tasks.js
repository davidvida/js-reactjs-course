import { apiStart, API_FAILURE, API_SUCCESS } from "../actions/api";
import { FETCH_TASKS, setTasks } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API_GET = "http://localhost:3000/data/tasks.json";

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
  }
};
