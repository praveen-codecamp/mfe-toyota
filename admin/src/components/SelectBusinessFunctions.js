import React, { useState, useEffect } from "react";
import { accessControlAPI } from "../../../shared/constants";
import CustomSelect from "./CustomSelect";

export default ({ name, selectedValue, handleInputChange, userDetails }) => {
  const [businessFunctions, setBusinessFunctions] = useState([]);
  const orgqs =
    userDetails && userDetails.organization
      ? "?orgId=" + userDetails.organization
      : "";
  const getBusinessFunction = async () => {
    const res = await fetch(`${accessControlAPI}/businessFunctions${orgqs}`);
    const jsonRes = await res.json();
    setBusinessFunctions(jsonRes);
  };
  useEffect(() => {
    getBusinessFunction();
  }, []);

  return (
    <>
      {businessFunctions && businessFunctions.length > 0 && (
        <CustomSelect
          selectedValue={selectedValue}
          name={name}
          lable="business functions"
          handleInputChange={handleInputChange}
          data={{
            valueSelecter: "id",
            textSelector: "description",
            obj: businessFunctions,
          }}
        />
      )}
    </>
  );
};
