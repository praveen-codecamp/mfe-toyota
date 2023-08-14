import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaterialTable, { Column } from "@material-table/core";

export const TableEditable = ({ data }) => {
  if (!data || data.length === 0) return null;

  const [editableData, setData] = useState(data);
  const columns = [
    { title: "Modal", field: "model" },
    { title: "Sufix", field: "sufix" },
    { title: "Type", field: "type" },
    { title: "Category", field: "category" },
    { title: "Domestic/Export", field: "domesticExport" },
    { title: "Assign Type", field: "assignType" },
    { title: "Hold Invoice", field: "holdInvoice" },
    { title: "Model Pickup Flag", field: "modelPickupFlag" },
    { title: "Plant Code", field: "plantCode" },
    { title: "Model Print Sequence", field: "modelPrintSequence" },
    { title: "Automatic Yard In Flag", field: "automaticYardInFlag" },
    { title: "EV Flag", field: "evFlag" },
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
      title=""
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
        showTitle: false,
        selection: true,
        pageSize:10,
        pageSizeOptions:[10,20,30,40,50],
        paginationType:'stepped',
        showFirstLastPageButtons:false,
        paginationAlignment:"left",
        rowStyle: (index) => ( index % 2 == 0 ) ? {fontSize: ".7rem", backgroundColor: "#f0f8fc" } : {fontSize: ".7rem", backgroundColor: "#FFFFFF" },
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
