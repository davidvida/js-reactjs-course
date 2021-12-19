import React, { Component } from "react";
import SelfTodoList from "../SelfTodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchTasks, addTasks, fetchUserTasks } from "../../../actions/tasks";

class SelfTodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApplied: false,
      hideTimer: false,
      count: 0
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
  }

  componentDidMount() {
    const __this = this;
    this.props.fetchUserTasks({user: 'Miguel Montalvo'});
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
      <SelfTodoList
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

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTasks: (query) => dispatch(fetchUserTasks(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelfTodoListContainer);
