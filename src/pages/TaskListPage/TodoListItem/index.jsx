import React from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
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

/*
* function component
*/
// import useStyles from "./styles";
import Timer from "../../../components/Timer";

const TodoListItem = ({ id, name, completed, onToggle, addTimer, onClick, item }) => {

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
    ()=>performUpdateTask(body, item._id);
  };


  const classes = useStyles();
  return (
    <ListItem
      disablePadding
      
      secondaryAction={
        // {addTimer ? }
        <IconButton edge="end" aria-label="play" onClick={(item)=>onClick(item)}>
          {/* {addTimer ? <Timer /> : <StopCircleIcon />} */}
          <PlayIcon />
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          { completed ? <CompletedIcon className={classes.icon} /> : <PendingIcon /> }
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
};

// export default withStyles(styles)(TodoListItem);
export default TodoListItem;
