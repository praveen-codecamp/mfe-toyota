import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

function createData(date, remark, amount, account) {
  return { date, remark, amount, account };
}

const rows = [
  createData(
    "Today",
    "Bank transfert societe general",
    "- 3,600.00",
    "CR00 56788 67986 5476"
  ),
  createData(
    "25/04/2023",
    "Cotisation Affinea",
    "- 240.00",
    "CR00 54768 76886 6798"
  ),
  createData("24/04/2023", "Loan car", "+ 689.00", "TR00 6789 4567 78"),
  createData(
    "22/04/2023",
    "Travel agency",
    "- 240.00",
    "TR00 7895 6789 83"
  ),
  createData(
    "22/04/2023",
    "Payment recieved",
    "+ 140.00",
    "DE00 4788 7895 33"
  ),
  createData(
    "22/04/2023",
    "Payment recieved",
    "+ 20,040.00",
    "DE00 4567 6789 56"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: "100%", borderSpacing: "0 0", padding: 0 }}
        aria-label="latest transactions"
        size="small"
      >
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  color: "#414141",
                  font: "Roboto, medium",
                  fontSize: ".7rem",
                  fontWeight: "bold",
                  opacity: 0.7,
                }}
              >
                {row.date}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  opacity: 0.8,
                  font: "Roboto, Regular",
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
              >
                {row.remark}
                <Typography
                  sx={{
                    color: "#414141",
                    font: "Roboto, medium",
                    fontSize: ".6rem",
                    opacity: 0.7,
                  }}
                >
                  {row.account}
                </Typography>
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  opacity: 0.8,
                  font: "Roboto, Regular",
                  fontSize: ".7rem",
                  fontWeight: "bold",
                  color: row.amount.includes("-") ? "#FF4400" : "#26D07C",
                }}
              >
                {row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
