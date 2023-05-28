import React, { useState, useEffect } from "react";
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
    const jsonRes = await res.json();
    setOrganizations(jsonRes);
  };
  useEffect(() => {
    getOrganizations();
  }, []);

  return (
    <CustomSelect
      selectedValue={selectedValue}
      name={name}
      lable="Organization"
      handleInputChange={handleInputChange}
      data={{
        valueSelecter: "id",
        textSelector: "description",
        obj: organizations,
      }}
    />
  );
};
