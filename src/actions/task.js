// action types
export const SET_LIST = 'SET_LIST';
export const SET_FILTER = 'SET_FILTER';

export const setList = (list) => ({
  type: SET_LIST,
  data: list,
});

export const setFilter= (isFilter) => ({
    type: SET_FILTER,
    filterApplied: isFilter,
  });