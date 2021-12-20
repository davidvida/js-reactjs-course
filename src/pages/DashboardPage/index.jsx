import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardContainer from "./DashboardContainer";
import { countTasks } from "../../actions/tasks";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.countTasks();
  }

  render() {
    return (
      <DashboardContainer list={ this.props.list} />
    );  
  }  
}

const mapStateToProps = state => {
  return {
    list: state.tasks.data
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        countTasks: () => dispatch(countTasks({query: {}}))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
