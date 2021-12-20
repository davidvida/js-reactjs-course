import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { fetchTasks } from "../../../actions/tasks";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApplied: false,
      hideTimer: false
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
  }

  componentDidMount() {
    const __this = this;
    this.props.fetchTasks(this.props.filter);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      if (this.props.filter) {
        this.props.fetchTasks(this.props.filter);
      } else {
        this.props.fetchTasks();
      }
    }
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

  render() {
    const { filterApplied } = this.state;
    const { list, loading } = this.props;
    return (
      <TodoList
        list={list}
        showLoader={loading}
        filterApplied={filterApplied}
        toggleTimer={this.toggleTimer}
        toggleListItem={this.toggleListItem}
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
    fetchTasks: (query) => dispatch(fetchTasks({query: query}))
  };
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
