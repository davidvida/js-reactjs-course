// component link to route lement here
// use useNavigation for redirect
import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ListItemLink = ({ to, label, icon }) => {
  let navigate = useNavigate();
  const handleClick = (e) => {
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