import { apiFailure, apiPostTaskSuccess, apiSuccess, API_POST_TASK, API_START } from "../actions/api";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === API_START || action.type === API_POST_TASK) {
    const { method, url } = action.meta || {};
    const body = action.payload || undefined;
    fetch(url, {method: method, body: JSON.stringify(body), headers: {'Content-Type': 'application/json'},})
    .then(response => response.json())
    .then(data => {
      if (action.type === API_POST_TASK) {
        dispatch(apiPostTaskSuccess({response: data}));
      } else { 
        dispatch(apiSuccess({response: data}));
      }
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
  }
}
