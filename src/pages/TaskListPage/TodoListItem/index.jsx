import React from "react";
import { format } from 'date-fns';
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PlayIcon from '@mui/icons-material/PlayCircleOutlined';
import StopRounded from '@mui/icons-material/StopRounded';
import CompletedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PendingIcon from '@mui/icons-material/PendingOutlined';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

/*
* function component
*/
import useStyles from "./styles";


const TodoListItem = ({ name, completed, item, enabled, updateTask }) => {
  const classes = useStyles();
  const onUpdateListener = (event) => {
    event.preventDefault();
    updateTask(item, !completed);
  };
  const startDate = item.startDate ? new Date(item.startDate) : null;
  const endDate = item.endDate ? new Date(item.endDate) : null;
  const labels = item.labels;
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" aria-label="play" onClick={onUpdateListener}>
          { completed ? <StopRounded /> : <PlayIcon /> }
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          { completed ? <CompletedIcon className={classes.icon} /> : <PendingIcon /> }
        </ListItemIcon>
        <ListItemText primary={name} />
        { startDate ? <ListItemText primary="Start date" secondary={format(startDate, "MMMM d, yyyy H:mma")}/> : <></> }
        { endDate ? <ListItemText primary="End date" secondary={format(endDate, "MMMM d, yyyy H:mma")}/> : <></> }
        { labels ? <Paper sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0
                  }}>
          { labels.map((label, index) => {
            return (
              <Chip label={label} />
            );
        })} </Paper> : <></> }
      </ListItemButton>
    </ListItem>
  )
};

export default TodoListItem;
