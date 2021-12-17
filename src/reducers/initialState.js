const initialState = {
  ui: {
    loading: false,
    notifcations: []
  },
  tasks:{
    data: [],
    filterApplied: false,
    hideTimer: false
  }, 
  dashboard: {
    data: []
  }
};

export default initialState;
