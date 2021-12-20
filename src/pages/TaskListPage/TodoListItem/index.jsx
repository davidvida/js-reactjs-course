import React from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PlayIcon from '@mui/icons-material/PlayCircleOutlined';
import StopIcon from '@mui/icons-material/StopCircleOutlined';
import CompletedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PendingIcon from '@mui/icons-material/PendingOutlined';
/* styles import */
import { withStyles } from "@mui/styles";
import styles from './styles';

import useStyles from "./styles";

const TodoListItem = ({performUpdateTask,item}) => {
  const classes = useStyles();

  const setTime = () => {
    var completed = item.completed;
    if (!item.startDate) {
      var startDate = (new Date()).toISOString();
    }
    else if (!item.endDate) {
      var endDate = (new Date()).toISOString();
      completed = true;
    }
    
    const udpatedItem = {
      ...item,
      startDate: startDate,
      endDate: endDate,
      completed: completed
    }
    
    performUpdateTask(udpatedItem);
  }

  return (
    <ListItem
      disablePadding
      secondaryAction={
        !item.completed && <IconButton edge="end" aria-label="play" onClick={setTime}>
          {!item.startDate ? <PlayIcon /> : <StopIcon />}
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          { item.completed ? <CompletedIcon className={classes.icon} /> : <PendingIcon /> }
        </ListItemIcon>
        <ListItemText primary={item.name} />
        <ListItemText primary={item.description} />
        <ListItemText primary={item.startDate} />
        <ListItemText primary={item.endDate} />
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  )
};

// export default withStyles(styles)(TodoListItem);
export default TodoListItem;
