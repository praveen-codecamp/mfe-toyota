import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableCellData = styled(TableCell)(({ theme }) => ({
  border: "1px solid #DEDEDE",
  lineHeight: ".2rem",
  "& th": {
    color: "Black",
  },
  "&:nth-child(even) th": {
    background: "#E7F2FE",
  },
}));
const TableCellHead = styled(TableCell)(({ theme }) => ({
  border: "1px solid #DEDEDE",
  lineHeight: ".8rem",
  "& th": {
    color: "#232323",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Export SR", "Export SR", "22/06/2023 03:23"),
  createData("Export SR", "Export SR", "22/06/2023 04:23"),
  createData("Export SR", "Export SR", "22/06/2023 06:23"),
  createData("Export SR", "Export SR", "22/06/2023 05:23"),
  createData("Export SR", "Export SR", "22/06/2023 07:23"),
];

export default function CallingSheetTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "auto", border: "1px solid #A7A7A7", borderRadius: "0" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCellHead>No.</TableCellHead>
            <TableCellHead>Transportation Route Group</TableCellHead>
            <TableCellHead>Transportation Route</TableCellHead>
            <TableCellHead>Complete Date/Time</TableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.name}
              sx={{
                "&:th": {
                  border: "1px solid #A7A7A7",
                },
                "&:nth-of-type(even)": {
                  backgroundColor: "#E7F2FE",
                },
              }}
            >
              <TableCellData component="th" scope="row">
                {i + 1}
              </TableCellData>
              <TableCellData component="th" scope="row">
                {row.name}
              </TableCellData>
              <TableCellData>{row.calories}</TableCellData>
              <TableCellData>{row.fat}</TableCellData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
