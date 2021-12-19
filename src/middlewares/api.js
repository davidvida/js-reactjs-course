import { apiFailure, apiSuccess, API_START } from "../actions/api";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === API_START) {
    const { method, body, url } = action.meta;
    fetch(url, { method: method, body: body, mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      dispatch(apiSuccess({response: data}));
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
  }
}
