import React, { Component } from 'react';
import { connect } from "react-redux";
import { Chart, PieSeries, Title, Legend, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { Animation, AreaSeries, BarSeries, LineSeries } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';
import { fetchTasks } from "../../../actions/tasks";

class DashboardContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            chartDetail: []
          };
    }    
    
    componentDidMount() {
        const __this = this;
        this.props.fetchTasks();
    }

    countCompletedAndIncompleted(list) {
        let chartDetail = [];
        if (list && list.length > 0){
            chartDetail.push({
                argument: 'Complete Tasks',
                value: list.filter(item => item.completed === true).length,
            });
            chartDetail.push({
                argument: 'Incomplete Tasks',
                value: list.filter(item => item.completed === false).length,
            });
        }
        return chartDetail;
    }

    render() {
        const { list } = this.props;
        const chartDetail = this.countCompletedAndIncompleted(list);

        return (
            <div>
               <Chart data={chartDetail}>
                    <PieSeries name="tasks" valueField="value" argumentField="argument" />
                    <Legend />
                    <Animation />
                    <EventTracker />
                    <Tooltip />
                    <Title text="Total Tasks"/>
                </Chart>         
            </div>
        ); 
    }    
};
const mapStateToProps = state => {
      return {
        list: state.tasks.data
      }
    }
    

const mapDispacthToProps = dispatch => {
    return {
      fetchTasks: () => dispatch(fetchTasks({query: {}})),
    }
  }

export default connect(mapStateToProps, mapDispacthToProps)(DashboardContainer);