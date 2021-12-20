import React, { Component } from 'react';
import { Chart, PieSeries, Title, Legend, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';


class DashboardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {list} = this.props;
        return (
            <div>
                <Chart data={list}>
                    <PieSeries name="tasks" valueField="value" argumentField="argument" />
                    <Legend />
                    <Animation />
                    <EventTracker />
                    <Tooltip />
                    <Title text="Total tasks"/>
                </Chart>
            </div>
        ); 
    }
};

export default DashboardContainer;