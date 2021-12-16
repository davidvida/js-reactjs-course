// action types
// event actions
export const API_START = 'API_START';
export const API_POST = 'API_POST';
export const API_SUCCESS = 'API_SUCCESS';
export const POST_SUCCESS = 'POST_SUCCESS';
export const API_FAILURE = 'API_FAILURE';
export const API_SELF_START = 'API_SELF_START';
export const API_PUT = 'API_PUT';

export const apiStart = ({body, method, url}) => {
  return {
    type: API_START,
    payload: body,
    meta: {method, url, body}
  };
};

export const apiSelfStart = ({body, method, url}) => {
  return {
    type: API_SELF_START,
    payload: body,
    meta: {method, url, body}
  };
};

export const apiPost = ({body, method='POST', url}) => {
  return {
    type: API_POST,
    payload: body,
    meta: {method, url, body}
  };
}

export const apiSuccess = ({response}) =>  ({
  type: API_SUCCESS,
  payload: response
});

export const postSuccess = ({response}) =>  ({
  type: POST_SUCCESS,
  payload: response
});

export const apiFailure = ({error}) =>  ({
  type: API_FAILURE,
  payload: error
});

export const apiPut = ({body, method='POST', url}) => {
  return {
    type: API_PUT,
    payload: body,
    meta: {method, url, body}
  };
}
