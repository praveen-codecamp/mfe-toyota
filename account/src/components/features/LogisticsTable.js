import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { TableCell, TableHead, TableRow } from "@mui/material";

const borderObj = {
  border: "1px solid black",
  "& th": {
    color: "rgba(96, 96, 96)",
  },
};

// export function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   }, [value]);
//   return ref.current;
// }

export const LogisticsTable = ({ tableData }) => {
  //const classes = useStyles();
  // if (!data || data.length === 0) return null;
  console.log("tableData---", tableData);
  const [editableData, setData] = useState(tableData);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const columns = [
    { title: "Number", field: "number" },
    { title: "First Destination", field: "firstDestination" },
    { title: "Tentative Kakudai-hyo out", field: "tentativeKakudai" },
    { title: "Assigned", field: "assigned" },
    { title: "Unassigned", field: "unAssigned" },
    { title: "Status", field: "status" },
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
      title="Logistic flow Maintenance (FVSC01010 Ver 1.0)"
      key="material-table"
      data={editableData}
      columns={columns}
      components={{
        Header: (props) => (
          <TableHead>
            <TableRow sx={borderObj}>
              <TableCell sx={borderObj} rowSpan={1}>
                Number
              </TableCell>
              <TableCell sx={borderObj} colSpan={1} align="center">
                First Destination
              </TableCell>
              <TableCell sx={borderObj} colSpan={1} align="center">
                Tentative Kakudai-hyo out
              </TableCell>
              <TableCell sx={borderObj} colSpan={2} align="center">
                Leave to Dealer
              </TableCell>
              <TableCell sx={borderObj} rowSpan={1} align="center">
                Status
              </TableCell>
            </TableRow>
            <TableRow sx={{ ...borderObj, borderTop: "1px solid black" }}>
              <TableCell sx={borderObj} />
              <TableCell sx={borderObj} align="center">
                L/O-Un Assigned
              </TableCell>
              <TableCell sx={borderObj} />
              <TableCell sx={borderObj} align="center">
                L/O-Assigned
              </TableCell>
              <TableCell sx={borderObj} align="center">
                Unassigned-assigned
              </TableCell>
              <TableCell sx={borderObj} />
            </TableRow>
          </TableHead>
        ),
        Row: ({ data }) => {
          return (
            <TableRow sx={borderObj} key={data.number}>
              <TableCell sx={borderObj}>{data.number}</TableCell>
              <TableCell align="center" sx={borderObj}>
                {data.firstDestination}
              </TableCell>
              <TableCell sx={borderObj} align="center">
                {data.tentativeKakudai}
              </TableCell>
              <TableCell sx={borderObj} align="center">
                {data.assigned}
              </TableCell>
              <TableCell sx={borderObj} align="center">
                {data.unAssigned}
              </TableCell>
              <TableCell sx={borderObj} align="center">
                {data.status}
              </TableCell>
            </TableRow>
          );
        },
      }}
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

//export default LogisticsTable;
