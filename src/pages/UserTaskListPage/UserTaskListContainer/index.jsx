import React, { Component } from "react";
import UserTaskList from "../UserTaskList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchUserTasks } from "../../../actions/tasks";

class UserTaskListContainer extends Component {
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
    this.props.fetchUserTasks({user: this.props.user});
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
      <UserTaskList
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

export default connect(mapStateToProps, mapDispatchToProps)(UserTaskListContainer);