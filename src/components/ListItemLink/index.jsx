// component link to route lement here
// use useNavigation for redirect
// Help in: https://reactrouter.com/docs/en/v6/api#usenavigate
import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ListItemLink = ({ to, label, icon }) => {
  let navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
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