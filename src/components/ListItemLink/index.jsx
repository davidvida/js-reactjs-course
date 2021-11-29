// component link to route lement here
// use useNavigation for redirect
import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router";

const ListItemLink = ({ to, label, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // logic to redirect
    navigate(to);
  }

  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
}
 export default ListItemLink;