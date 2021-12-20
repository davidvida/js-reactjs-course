import { apiFailure, apiStart, apiSuccess, API_START } from "../actions/api";

const TASKS_API_GET = "https://davidvida-tasks-service.herokuapp.com/api/v1/task";
export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action)
  switch (action.type) {
    case API_START:
      const { method, body, url } = action.meta;
      if (method === "POST" || method === "PUT") {
        fetch(action.meta.url, {
          method: action.meta.method,
          body: JSON.stringify(action.payload),
          headers: { 'Content-Type': 'application/json' }
        }
        )
          .then(response => response.json())
          .then(data => {
            dispatch(apiStart({ body: {}, method: 'GET', url: TASKS_API_GET }));
          })
          .catch(function (error) {
            dispatch(apiFailure({ error: error }));
          });
      } else {

        if (method === "GET") {
          fetch(url, { method: method, body: body })
            .then(response => response.json())
            .then(data => {
              dispatch(apiSuccess({ response: data }));
            })
            .catch(function (error) {
              dispatch(apiFailure({ error: error }));
            });
        }
      }
      break;
    default:
      break;
  }
}
