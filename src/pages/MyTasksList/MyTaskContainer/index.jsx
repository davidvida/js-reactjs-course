import React, { Component } from "react";
import MyTodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchTasks } from "../../../actions/tasks";

class MyTodoListContainer extends Component {
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
    this.props.fetchTasks();
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
      <MyTodoList
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
    fetchTasks: () => dispatch(fetchTasks({query: {}})),
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(MyTodoListContainer);
