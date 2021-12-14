import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";

const ChartCard = ({ data }) => {
  const dataForChart = [
    {
      title: "Done",
      value: data.filter((task) => task.completed).length,
      color: "#c4e6d5",
    },
    {
      title: "In-Progress",
      value: data.filter((task) => !task.completed).length,
      color: "#ffc7a2",
    },
  ];
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <Typography variant="h6">
          Done: {dataForChart[0].value}
        </Typography>
        <Typography variant="h6">
          In-Progress: {dataForChart[1].value}
        </Typography>
        <PieChart
          data={dataForChart}
        />
      </CardContent>
    </Card>
  );
};

export default ChartCard;
