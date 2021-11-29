// component link to route lement here
// use useNavigation for redirect
import React from "react";
import { useNavigate } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

const ListItemLink = ({ to, label, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};
export default ListItemLink;
