import React from "react";
import { Box, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PlayIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleIcon from '@mui/icons-material/StopCircle';
import CompletedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PendingIcon from '@mui/icons-material/PendingOutlined';
/* styles import */
import { withStyles } from "@mui/styles";
import styles from './styles';
import useStyles from "./styles";
/*
* class based component
*/
// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { name, completed, classes } = this.props;
//     return (
//       <ListItem
//         disablePadding
//         secondaryAction={
//           <IconButton edge="end" aria-label="play">
//             <PlayIcon />
//           </IconButton>
//         }
//       >
//         <ListItemButton>
//           <ListItemIcon>
//             { completed ? <CompletedIcon className={classes.icon} /> : <PendingIcon /> }
//           </ListItemIcon>
//           <ListItemText primary={name} />
//         </ListItemButton>
//       </ListItem>
//     )
//   }
// }

function AppChild() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          bgcolor: 'yellow',
          color: 'green',
          fontSize: 22
        }}
      >
        Done
      </Box>
    </div>
  )
};

/*
* function component
*/
// import useStyles from "./styles";
import Timer from "../../../components/Timer";

// const TodoListItem = ({ id, name, completed, onToggle, addTimer, performUpdateTask, item }) => {


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
    console.log("Item Id" + item._id)
    performUpdateTask(item);
  };


  const classes = useStyles();
  return (
    <ListItem
      disablePadding

      secondaryAction={
        <>
          <IconButton edge="end" aria-label="play" onClick={updateTask}>
            {item.startDate && !item.completed ? <StopCircleIcon /> : !item.completed ? <PlayIcon /> : < AppChild />}
          </IconButton>
        </>
      }
    >

      <ListItemButton>
        <ListItemIcon>
          {item.completed ? <CompletedIcon className={classes.icon} /> : <PendingIcon />}
        </ListItemIcon>
        <ListItemText primary={item.name} />
        {item.startDate && !item.completed ? <><Timer taskTime={item.startDate} /> </> : <></>}
      </ListItemButton>

    </ListItem>
  )
};

// export default withStyles(styles)(TodoListItem);
export default TodoListItem;
