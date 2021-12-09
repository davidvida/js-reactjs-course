import React from "react";
import { FormControlLabel, Switch } from "@mui/material";


const Toggle = ({ label, onToggle, active }) => {
  return (
    <FormControlLabel control={
      <Switch
        data-testid="toggle"
        onChange={onToggle}
        defaultChecked={active}
      />
      }
      label={label}
    />

  )
};

export default Toggle;
