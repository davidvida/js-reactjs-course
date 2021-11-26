// component link to route lement here
// use useNavigation for redirect
import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

const ListItemLink = ({ to, label, icon }) => {

  const handleClick = () => {
    // logic to redirect
  }

  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
}
 export default ListItemLink;