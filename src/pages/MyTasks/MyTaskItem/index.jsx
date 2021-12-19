import React from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PlayIcon from '@mui/icons-material/PlayCircleOutlined'
import CompletedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PendingIcon from '@mui/icons-material/PendingOutlined';
import useStyles from './styles';

const MyTaskItem = ({name, completed, completedItem, onChangeCallback}) => {
  const classes = useStyles();

  const handleItemStatus = (item) => {
    debugger;
    var newTaskElement = null;
    if(item.startDate === null){
      newTaskElement = {
        ...item,
        startDate: new Date()
      }
      //this.props.timerTask(true);
      //this.props.updateTask(newTaskElement);
    }else{
      if(item.startDate !== null && item.endDate === null){
        newTaskElement = {
            ...item,
            completed: true,
            endDate: new Date()
        }
      }
    }
    onChangeCallback(newTaskElement);
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton 
        button
        onClick={() => {
            handleItemStatus(completedItem);}}
        edge="end" aria-label="play">
          <PlayIcon />
        </IconButton>
      }

    >
      <ListItemButton >
        <ListItemIcon>
          { completed ? <CompletedIcon className={classes.icon} /> : <PendingIcon /> }
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
};

export default MyTaskItem;
