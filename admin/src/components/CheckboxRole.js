import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { accessControlAPI } from "../../../shared/constants";

export default ({
  organization,
  rolesDTO,
  handleUserRoleChecked,
  userDetails,
}) => {
  const [roles, setRoles] = useState([]);
  const orgqs =
    userDetails && userDetails.organization
      ? "?orgId=" + userDetails.organization
      : "";
  const getRoles = async () => {
    const res = await fetch(`${accessControlAPI}/roles${orgqs}`);
    const jsonRes = await res.json();
    setRoles(jsonRes);
  };
  useEffect(() => {
    getRoles();
  }, []);
  const roleList =
    organization && roles.length > 0
      ? roles.filter((role) => role.organization == organization)
      : [];
  const isSelected = (roleID) => {
    if (!rolesDTO) return false;
    return rolesDTO.some((role) => role.roleId === roleID);
  };

  return (
    <FormGroup row>
      {roleList.map((role) => (
        <FormControlLabel
          sx={{ width: "12rem" }}
          key={role.id}
          control={
            <Checkbox
              checked={isSelected(role.roleId)}
              onChange={() => handleUserRoleChecked(role)}
            />
          }
          label={role.description}
        />
      ))}
    </FormGroup>
  );
};
