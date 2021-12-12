// action types
// event actions
export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export const apiStart = ({body, method, url}) =>  ({
  type: API_START,
  payload: body,
  meta: {method, url, body}
});

export const apiSuccess = ({response}) =>  ({
  type: API_SUCCESS,
  payload: response
});

export const apiFailure = ({error}) =>  ({
  type: API_FAILURE,
  payload: error
});
