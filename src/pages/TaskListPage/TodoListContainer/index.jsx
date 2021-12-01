import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { setList } from "../../../actions/tasks";
import { setFilter } from "../../../actions/filter";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      hideTimer: false
    };
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
        __this.props.setListProp(data.list);
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
    this.props.setFilterProp(event.currentTarget.checked);
  }

  performAddTask(newTask) {
    const { list } = this.props;
      const newTaskElement = {
        ...newTask,
        id: list.length,
        completed: false
      }
      let newList = [...list];
      newList.push(newTaskElement);
      this.props.setListProp(newList);
  }

  render() {
    const { list, loading, filter } = this.props;
    return (
      <TodoList
        list={list}
        showLoader={loading}
        filterApplied={filter}
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
    list: state.tasks.data,
    filter: state.filter.filterApplied
  }
}

const mapDispacthToProps = dispatch => {
  return {
    setLoaderProp: (show) => dispatch(setLoader(show)),
    setListProp: (list) => dispatch(setList(list)),
    setFilterProp: (filter) => dispatch(setFilter(filter))
  }
}


export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);

