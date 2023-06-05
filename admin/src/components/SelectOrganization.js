import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { accessControlAPI } from "../../../shared/constants";
import CustomSelect from "./CustomSelect";

export default ({ name, selectedValue, handleInputChange, userDetails }) => {
  const [organizations, setOrganizations] = useState([]);
  const orgqs =
    userDetails && userDetails.organization
      ? "?parentOrgId=" + userDetails.organization
      : "";
  const getOrganizations = async () => {
    const res = await fetch(`${accessControlAPI}/organizations${orgqs}`);
    let jsonRes = await res.json();
    if (jsonRes.length > 0) {
      jsonRes = [
        {
          id: userDetails.organization,
          description: userDetails?.organizationDescription,
        },
        ...jsonRes,
      ];
    }

    setOrganizations(jsonRes);
  };
  useEffect(() => {
    getOrganizations();
  }, []);
  if (organizations.length === 0 && selectedValue) {
    return (
      <Typography variant="subtitle1">
        {userDetails?.organizationDescription}
      </Typography>
    );
  }
  return (
    <CustomSelect
      selectedValue={selectedValue}
      name={name}
      lable="organization"
      handleInputChange={handleInputChange}
      data={{
        valueSelecter: "id",
        textSelector: "description",
        obj: organizations,
      }}
    />
  );
};
