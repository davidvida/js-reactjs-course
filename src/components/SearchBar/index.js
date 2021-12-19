import { TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar = ({placeholder, onChangeCallback}) => {
  const [searchText, setSearchText] = useState("");

  const onChangeSearchText = (event) =>{
    setSearchText(event.target.value);
    onChangeCallback(event.target.value);
  }
  return (
    <TextField
    id="search"
    placeholder={placeholder}
    label="Search"
    variant="outlined"
    value={searchText}
    onChange={onChangeSearchText}
    />
  )
};

export default SearchBar;
