import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Legend,
    Title,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';




const ChartPie = ({ list }) => {
    console.log("dfsdfsdf////**---" + list instanceof Array)
    const chartData = [
        {
            title: "Completed",
            //   value: list.filter((task) => task.completed).length,
            value: list instanceof Array ? list.filter((task) => task.completed).length : 0
        },
        {
            title: "In-Progress",
            //   value: list.filter((task) => !task.completed).length,
            value: list instanceof Array ? list.filter((task) => !task.completed).length : 0
        },
    ];


    return (
        <Paper>
            <Chart
                data={chartData}
            >
                <PieSeries
                    name="name"
                    valueField="value"
                    argumentField="title"
                />
                <Title
                    text="Status Tasks"
                />

                <Animation />
                <Tooltip />
                <Legend
                    position={'bottom'} />
            </Chart>
        </Paper>
    );
}

export default ChartPie;