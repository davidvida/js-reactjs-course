const initialState = {
  ui: {
    loading: false,
    notifcations: []
  },
  tasks:{
    // data: [],
    data: {
      list: [],
      filterApplied: false,
      hideTimer: false
    }
  }, 
  dashboard: {
    data: []
  }
};

export default initialState;
