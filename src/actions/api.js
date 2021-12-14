// action types
// event actions
export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export const apiStart = ({ body, method, url, onSuccess }) => ({
  type: API_START,
  payload: body,
  meta: { method, url, onSuccess },
});

export const apiSuccess = ({ response, onSuccess }) => ({
  type: API_SUCCESS,
  payload: response,
  meta: onSuccess,
});

export const apiFailure = ({error}) =>  ({
  type: API_FAILURE,
  payload: error
});
