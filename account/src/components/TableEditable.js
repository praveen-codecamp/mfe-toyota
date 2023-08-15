import React, { useState, useEffect } from "react";
import MaterialTable, { Column } from "@material-table/core";
import PlantCodeComponent from "./PlantCode";

export const TableEditable = ({ data }) => {
  if (!data || data.length === 0) return null;

  const [editableData, setData] = useState(data);
  useEffect(() => {
    setData(data);
  }, [data]);
  const columns = [
    { title: "Modal", field: "model" },
    { title: "Sufix", field: "sufix" },
    { title: "Type", field: "type" },
    { title: "Category", field: "category" },
    { title: "Domestic/Export", field: "domesticExport" },
    { title: "Assign Type", field: "assignType" },
    { title: "Hold Invoice", field: "holdInvoice" },
    { title: "Model Pickup Flag", field: "modelPickupFlag" },
    {
      title: "Plant Code", field: "plantCode",
      render: rowData => <PlantCodeComponent rowData={rowData} />
    },
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
        actionsColumnIndex: 13,
        showTitle: false,
        selection: true,
        pageSize: 10,
        pageSizeOptions: [10, 20, 30, 40, 50],
        paginationType: "stepped",
        showFirstLastPageButtons: false,
        paginationAlignment: "left",
        rowStyle:{ fontSize: ".7rem", backgroundColor: "#FFFFFF", padding: "5px", border: "1px solid #cac8c8", whiteSpace:"nowrap" },
        headerStyle: {
          backgroundColor: "#f3f3f3",
          //color: "#FFF",
          fontSize: ".7rem",
          lineHeight: 1.5,
          padding:"5px"
        },
      }}
    />
  );
};
