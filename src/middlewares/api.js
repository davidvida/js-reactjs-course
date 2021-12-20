import { apiFailure, apiStart, apiSuccess, API_START } from "../actions/api";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === API_START) {
    const { method, url } = action.meta;
    const body = action.payload;
    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: !!body ? JSON.stringify(body) : null
    };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        dispatch(apiSuccess({response: data}));
    })
    .catch(function(error) {
      dispatch(apiFailure({error: error}));
    });
  }
}
