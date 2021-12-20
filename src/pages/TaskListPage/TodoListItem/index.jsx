import React from "react";
import { Chip, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import PlayIcon from '@mui/icons-material/PlayCircleOutlined'
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

const TodoListItem = ({ name, completed, description, user, startDate, endDate, labels }) => {
  const classes = useStyles();
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" aria-label="play">
          <PlayIcon />
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          { completed ? <CompletedIcon className={classes.icon} /> : <PendingIcon /> }
        </ListItemIcon>
        <ListItemText primary={startDate ? `${user}:  ${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}` : user } secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              {`${name} - ` }
              </Typography>
              {description}
            </React.Fragment>
          } />
          {labels.length > 0 && labels.map((label) => {
            return (
              <Chip label={label} />
            )
          })}
      </ListItemButton>
    </ListItem>
  )
};

// export default withStyles(styles)(TodoListItem);
export default TodoListItem;
