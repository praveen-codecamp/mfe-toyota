import React, { useState, useEffect } from "react";
import MaterialTable, { MTableToolbar } from "@material-table/core";
import PlantCodeComponent from "./PlantCode";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const TableEditable = ({ data, addCallBack }) => {
  if (!data || data.length === 0) return null;

  const [editableData, setData] = useState(data);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    setData(data);
  }, [data]);

  const columns = [
    { title: "Model", field: "model", align: "center", type: "text" },
    {
      title: "Suffix",
      field: "sufix",
      maxWidth: 55,
      align: "center",
      type: "text",
    },
    {
      title: "Type",
      field: "type",
      align: "center",
      lookup: {
        Alphard: "Alphard",
        Velfire: "Velfire",
        Lexus: "Lexus",
        HiluxRevo_D: "Hilux Revo_D",
        Coaster: "Coaster",
        Hilux4X2: "Hilux 4X2",
        Soluna: "Soluna",
        Commuter: "Commuter",
        Camry: "Camry",
        Corolla: "Corolla",
        bZ4X: "bZ4X",
      },
    },
    {
      title: "Category",
      field: "category",
      align: "center",
      lookup: {
        Passenger: "Passenger",
        Commercial: "Commercial",
      },
    },
    {
      title: "Domestic / Export",
      field: "domesticExport",
      lookup: {
        Domestic: "Domestic",
        Export: "Export",
      },
    },
    {
      title: "Assign Type",
      field: "assignType",
      lookup: {
        FirmOrder: "Firm Order",
        NonFirmOrder: "Non Firm Order",
      },
    },
    {
      title: "Hold Invoice",
      field: "holdInvoice",
      lookup: {
        Recall: "Recall",
        None: "None",
        NewModel: "New Model",
      },
    },
    {
      title: "Model Pickup Flag",
      field: "modelPickupFlag",
      lookup: {
        TTTPickup: "TTT Pickup",
        DLRPickup: "DLR Pickup",
      },
    },
    {
      title: "Plant",
      field: "plantCode",
      render: (rowData) => <PlantCodeComponent rowData={rowData} />,
    },
    { title: "Model Print Sequence", field: "modelPrintSequence" },
    {
      title: "Automatic Yard In Flag",
      field: "automaticYardInFlag",
      maxWidth: 75,
      lookup: {
        Yes: "Yes",
        No: "No",
      },
    },
    {
      title: "EV Flag",
      field: "evFlag",
      maxWidth: 55,
      lookup: {
        Yes: "Yes",
        No: "No",
      },
    },
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

  const deleteSelectedRows = () => {
    const updatedData = editableData.filter(
      (row) => !selectedRows.find((item) => item.id === row.id)
    );
    setData(updatedData);
    setSelectedRows([]);
  };

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
          addCallBack();
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
        pageSize: 7,
        pageSizeOptions: [7, 10, 20, 30, 40, 50],
        paginationType: "stepped",
        numberOfPagesAround: 3,
        showFirstLastPageButtons: false,
        paginationAlignment: "left",
        rowStyle: {
          fontSize: ".7rem",
          backgroundColor: "#FFFFFF",
          padding: "5px",
          border: "1px solid #cac8c8",
          whiteSpace: "nowrap",
        },
        headerStyle: {
          backgroundColor: "#f3f3f3",
          //color: "#FFF",
          fontSize: ".7rem",
          lineHeight: 1.5,
          padding: "5px",
        },
        filter: true,
        showTextRowsSelected: false,
      }}
      onSelectionChange={(selectedRows) => {
        setSelectedRows(selectedRows);
        console.log(selectedRows);
      }}
      actions={[
        {
          icon: () => <DeleteOutlinedIcon />,
          tooltip: "Delete selected rows",
          onClick: () => deleteSelectedRows(),
        },
      ]}
    />
  );
};
