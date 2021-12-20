import React from "react";
import Chart from "react-google-charts";

const ChartCard = ({ data }) => {

    return (
        <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Task', 'Hours per Day'],
            ['Done', data.done],
            ['Pending', data.pending],
        ]}
        options={{
            title: 'My Task Percentage',
            is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
        />
    )
  };
  
  export default ChartCard;
  