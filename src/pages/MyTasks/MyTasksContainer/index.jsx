import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTasks, addTasks, setTasks, updateTasks, timerTasks } from "../../../actions/tasks";
import MyTasksList from "../MyTasksList"

class MyTasksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApplied: false,
      hideTimer: false
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.performStartTask = this.performStartTask.bind(this);
  }

  componentDidMount() {
    const __this = this;
    this.props.fetchTasks();
  }

  toggleTimer(event) {
    this.setState({
      hideTimer: event.currentTarget.checked
    });
  }

  performStartTask(newTaskElement, type) {
    if(newTaskElement !== null){
        if(type === "start"){
            this.setState({
                hideTimer: true
            });
        }else{
            this.setState({
                hideTimer: false
            });
        }
        this.props.updateTask(newTaskElement);
    }
    this.props.fetchTasks();
  }

  render() {
    const { filterApplied, hideTimer } = this.state;
    const { list, loading } = this.props;
    return (
      <MyTasksList
        list={list}
        showLoader={loading}
        filterApplied={filterApplied}
        toggleTimer={this.toggleTimer}
        hideTimer={hideTimer} 
        performStartTask={this.performStartTask}                                                                                                                          
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.ui.loading,
    list: state.tasks.data
  }
}

const mapDispacthToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks({query: {}})),
    addTasks: (task) => dispatch(addTasks({task: task})),
    setTask: () => dispatch(setTasks({list: list})),
    updateTask: (task) => dispatch(updateTasks({task:task})),
    timerTask: (time) => dispatch(timerTasks({timer:time}))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(MyTasksContainer);
