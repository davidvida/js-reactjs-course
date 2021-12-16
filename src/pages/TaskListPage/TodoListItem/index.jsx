import React from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PlayIcon from '@mui/icons-material/PlayCircleOutlined';
import StopRounded from '@mui/icons-material/StopRounded';
import CompletedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PendingIcon from '@mui/icons-material/PendingOutlined';
/* styles import */
import { withStyles } from "@mui/styles";
import styles from './styles';

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
import useStyles from "./styles";


const TodoListItem = ({ name, completed, item, enabled, updateTask }) => {
  const classes = useStyles();
  const onUpdateListener = (event) => {
    event.preventDefault();
    updateTask(item, !completed);
  };
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
      </ListItemButton>
    </ListItem>
  )
};

// export default withStyles(styles)(TodoListItem);
export default TodoListItem;
