import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaterialTable, { Column } from "@material-table/core";

export const TableEditable = ({ data }) => {
  if (!data || data.length === 0) return null;

  const [editableData, setData] = useState(data);
  const columns = [
    { title: "Name", field: "name" },
    {
      title: "Policy Number",
      field: "policyNumber",
      render: (rowData) => (
        <Link to={`/property/policy/${rowData.policyNumber}`}>
          {rowData.policyNumber}
        </Link>
      ),
    },
    { title: "Premium Amount", field: "premiumAmount", type: "numeric" },
    { title: "Policy Type", field: "policyType" },
    { title: "Deductible", field: "deductible" },
    { title: "Effective Date", field: "effectiveDate" },
    { title: "Expiration Date", field: "expirationDate" },
    { title: "Term", field: "term" },
    { title: "Coverages", field: "coverages" },
  ];
  // Helper function
  function getNewDataBulkEdit(changes, copyData) {
    // key matches the column editableData id
    const keys = Object.keys(changes);
    for (let i = 0; i < keys.length; i++) {
      if (changes[keys[i]] && changes[keys[i]].newData) {
        // Find the editableData item with the same key in copyData[]
        let targetData = copyData.find((el) => el.id === keys[i]);
        if (targetData) {
          let newTargetDataIndex = copyData.indexOf(targetData);
          copyData[newTargetDataIndex] = changes[keys[i]].newData;
        }
      }
    }
    return copyData;
  }

  return (
    <MaterialTable
      title="Model Master Maintenance (FVSC01010 Ver 1.0)"
      data={editableData}
      columns={columns}
      editable={{
        onBulkUpdate: (changes) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              let copyData = [...editableData];
              setData(getNewDataBulkEdit(changes, copyData));
              resolve();
            }, 1000);
          });
        },
        onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
        onRowUpdateCancelled: (rowData) => console.log("Row editing cancelled"),
        onRowAdd: (newData) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              newData.id = "uuid-" + Math.random() * 10000000;
              setData([...editableData, newData]);
              resolve();
            }, 1000);
          });
        },
        onRowUpdate: (newData, oldData) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...editableData];
              // In dataUpdate, find target
              const target = dataUpdate.find((el) => el.id === oldData.id);
              const index = dataUpdate.indexOf(target);
              dataUpdate[index] = newData;
              setData(dataUpdate);
              resolve();
            }, 1000);
          });
        },
        onRowDelete: (oldData) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = editableData.filter(
                (el) => el.id !== oldData.id
              );
              setData(dataDelete);
              resolve();
            }, 1000);
          });
        },
      }}
      options={{
        rowStyle: {
          //backgroundColor: "#6ABAC9",
          fontSize: ".8rem",
        },
        headerStyle: {
          backgroundColor: "#f0f8fc",
          //color: "#FFF",
          fontSize: ".7rem",
          lineHeight: 1.5,
        },
      }}
    />
  );
};
