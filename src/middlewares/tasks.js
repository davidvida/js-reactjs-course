import { apiStart, API_FAILURE, API_SUCCESS } from "../actions/api";
import { FETCH_TASKS, POST_TASK, PUT_TASK, setList, addTasks, updateTasks } from "../actions/tasks";
import { setLoader, setNotification } from "../actions/ui";

const TASKS_API_ENDPOINT =
  "https://davidvida-tasks-service.herokuapp.com/api/v1/task";

export const tasksMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_TASKS:
      next(
        apiStart({
          body: null,
          method: "GET",
          url: TASKS_API_ENDPOINT,
          onSuccess: (response) => setList(response),
        })
      );
      next(setLoader(true));
      break;
    case POST_TASK:
      next(
        apiStart({
          body: action.payload,
          method: "POST",
          url: TASKS_API_ENDPOINT,
          onSuccess: (response) => addTasks(response),
        })
      );
      next(setLoader(true));
      break;
    case PUT_TASK:
      next(
        apiStart({
          body: action.payload,
          method: "PUT",
          url: `${TASKS_API_ENDPOINT}/${action.paramId}`,
          onSuccess: (response) => updateTasks(response),
        })
      );
      next(setLoader(true));
      break;
    case API_SUCCESS:
      next(action.meta({ response: action.payload }));
      next(setLoader(false));
      break;
    case API_FAILURE:
      next(setNotification({ error: action.payload }));
      next(setLoader(false));
      break;
  }
};
