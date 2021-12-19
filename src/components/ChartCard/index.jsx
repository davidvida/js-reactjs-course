import React from "react";
import { CardContent, CardHeader, Typography, Card } from "@mui/material";

const ChartCard = ({ data }) => {

    return (
      <Card>
          <CardHeader></CardHeader>
          <CardContent></CardContent>
          <Typography variant="h5">Done: {data.done}</Typography>
          <Typography variant="h5">In Progress: {data.pending}</Typography>
      </Card>
    )
  };
  
  // export default withStyles(styles)(TodoListItem);
  export default ChartCard;
  