import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardContainer from "./DashboardContainer";
import { countTasks } from "../../actions/tasks";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const __this = this;
    this.props.countTasks();
  }

  render() {
    const {list} = this.props;
    return (
      <DashboardContainer list={list} />
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
