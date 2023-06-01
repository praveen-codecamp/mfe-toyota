import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { accessControlAPI } from "../../../shared/constants";

export default function CheckboxActions({
  actionsDTO,
  handleActionChecked,
  userDetails,
}) {
  const [actions, setActions] = useState([]);
  const orgqs =
    userDetails && userDetails.organization
      ? "?orgId=" + userDetails.organization
      : "";
  const getActions = async () => {
    const res = await fetch(`${accessControlAPI}/actions${orgqs}`);
    const jsonRes = await res.json();
    setActions(jsonRes);
  };
  useEffect(() => {
    getActions();
  }, []);
  const isSelected = (value) => {
    if (!actionsDTO) return false;
    return actionsDTO.some((action) => action.id === value);
  };
  return (
    <FormGroup row>
      {actions.map((action) => (
        <FormControlLabel
          sx={{ width: "10rem" }}
          key={action.id}
          control={
            <Checkbox
              checked={isSelected(action.id)}
              onChange={() => handleActionChecked(action)}
            />
          }
          label={action.description}
        />
      ))}
    </FormGroup>
  );
}
