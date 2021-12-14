import React from "react";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayCircleOutlined";
import CompletedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PendingIcon from "@mui/icons-material/PendingOutlined";
import OpenIcon from "@mui/icons-material/CircleOutlined";
/* styles import */
import useStyles from "./styles";

const StatusIcon = ({ item }) => {
  const classes = useStyles();
  if (item.completed && item.startDate && item.endDate) {
    return <CompletedIcon className={classes.iconCompleted} />;
  } else if (!item.completed && item.startDate && !item.endDate) {
    return <PendingIcon className={classes.iconPending} />;
  } else {
    return <OpenIcon className={classes.iconOpen} />;
  }
};

const TodoListItem = ({ performUpdateTask, item }) => {
  const updateTask = () => {
    let body = {};
    if (!item.startDate && !item.completed) {
      body = {
        startDate: new Date().toISOString(),
        completed: false,
      };
    } else if (item.startDate && !item.completed) {
      body = {
        endDate: new Date().toISOString(),
        completed: true,
      };
    }
    performUpdateTask(body, item._id);
  };
  return (
    <ListItem
      disablePadding
      secondaryAction={
        !item.completed ? (
          <IconButton edge="end" aria-label="play" onClick={updateTask}>
            <PlayIcon />
          </IconButton>
        ) : null
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <StatusIcon item={item} />
        </ListItemIcon>
        <ListItemText primary={item.name} />
        <ListItemText primary={item.user} />
      </ListItemButton>
    </ListItem>
  );
};

// export default withStyles(styles)(TodoListItem);
export default TodoListItem;
