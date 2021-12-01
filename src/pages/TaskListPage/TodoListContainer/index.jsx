import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   list: [],
    //   filterApplied: false,
    //   hideTimer: false
    // };
    this.state = props.state;
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.performAddTask = this.performAddTask.bind(this);
  }

  componentDidMount() {
    const __this = this;
    __this.props.setLoaderProp(true);
    // comunicate an external service to get data
    fetch("http://localhost:3000/data/tasks.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        list: data.list
      });
        setTimeout(function() {
          __this.props.setLoaderProp(false);
        }, 5000)
    })
    .catch(function(error) {
      console.error(error);
    });
  }

  toggleTimer(event) {
    this.setState({
      hideTimer: event.currentTarget.checked
    });
  }

  toggleListItem(event) {
    this.setState({
      filterApplied: event.currentTarget.checked
    });
  }

  performAddTask(newTask) {
    this.setState(state => {
      const newTaskElement = {
        ...newTask,
        id: state.list.length,
        completed: false
      }
      let newList = [...state.list];
      newList.push(newTaskElement);
      return {
        list: newList
      }
    });
  }

  render() {
    const { filterApplied } = this.state;
    const { list, loading } = this.props.state;
    return (
      <TodoList
        list={list}
        showLoader={loading}
        filterApplied={filterApplied}
        toggleTimer={this.toggleTimer}
        toggleListItem={this.toggleListItem}
        performAddTask={this.performAddTask}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.ui.loading,
    // list: state.tasks.data
    state: state.tasks.data
  }
}

const mapDispacthToProps = dispatch => {
  return {
    setLoaderProp: (show) => dispatch(setLoader(show))
  }
}


export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);

