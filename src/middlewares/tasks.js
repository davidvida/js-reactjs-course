import { apiStart, API_FAILURE, API_SUCCESS } from "../actions/api";
import {
  FETCH_TASKS,
  SET_TASKS,
  setTasks,
  ADD_TASKS,
  addTasks,
} from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API_ENDPOINT = "http://localhost:3000/data/tasks.json";

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_TASKS:
      next(apiStart({ body: null, method: "GET", url: TASKS_API_ENDPOINT }));
      next(setLoader(true));
      break;
    case ADD_TASKS:
      next(
        apiStart({
          body: action.payload,
          method: "POST",
          url: TASKS_API_ENDPOINT,
        })
      );
    case API_SUCCESS:
    case SET_TASKS:
      next(setTasks({ list: action.payload }));
      next(setLoader(false));
      break;
    case API_SUCCESS:
    case ADD_TASKS:
      next(addTasks({ task: action.payload }));
      break;
    case API_FAILURE:
      next(setNotification({ error: action.payload }));
      next(setLoader(false));
  }
};
