// action types
export const SET_LOADER = 'SET_LOADER';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';

export const setLoader = (showLoader) => ({
  type: SET_LOADER,
  payload: showLoader
});

export const setNotification = ({error}) => ({
  type: SET_NOTIFICATION,
  payload: error
});
