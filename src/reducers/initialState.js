const initialState = {
  ui: {
    loading: false,
    notifications: []
  },
  tasks: {
    data: [],
    applyFilter: false,
    hideTimer: false
  }, 
  dashboard: {
    data: []
  }
};

export default initialState;
