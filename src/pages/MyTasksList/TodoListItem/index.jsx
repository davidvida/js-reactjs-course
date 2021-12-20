import React from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PlayIcon from '@mui/icons-material/PlayCircleOutlined'
import CompletedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PendingIcon from '@mui/icons-material/PendingOutlined';
/* styles import */
import { withStyles } from "@mui/styles";
import styles from './styles';

import useStyles from "./styles";
import { Block } from "@mui/icons-material";


const MyTodoListItem = ({ id,name, completed, description, updateTask}) => {
  const classes = useStyles();
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" aria-label="play" onClick={updateTask.bind(null,id,!completed)} >
          <PlayIcon />
        </IconButton >
      }
    >
      <ListItemButton>
        <ListItemIcon>
          { completed ? <CompletedIcon className={classes.icon} /> : <PendingIcon /> }
        </ListItemIcon>
        <ListItemText primary={name} secondary={'Description: '+ description} />
      </ListItemButton>
    </ListItem>
  )
};

// export default withStyles(styles)(TodoListItem);

export default MyTodoListItem;
