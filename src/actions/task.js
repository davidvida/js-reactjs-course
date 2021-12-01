// action types
export const SET_DATA = 'SET_DATA';
export const SET_FILTERAPPLIED = 'SET_FILTERAPPLIED';
export const SET_HIDETIMER = 'SET_HIDETIMER';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data
});

export const setFilterApplied = (data) => ({
    type: SET_FILTERAPPLIED,
    payload: data
  });

export const setHideTimer = (data) => ({
    type: SET_HIDETIMER,
    payload: data
  });
