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
    "Bank transfer societe general",
    "-3,600.00",
    "CR00 56788 67986 5476"
  ),
  createData(
    "05/07/2023",
    "Cotisation Affinea",
    "-240.00",
    "CR00 56768 76877 5763"
  ),
  createData("05/07/2023", "Loan car", "+689.00", "TR00 56734 76546 3421"),
  createData("05/06/2023", "Travel agency", "-670.00", "TR00 65890 56780 4532"),
  createData(
    "05/05/2023",
    "Payment recieved",
    "+20,340.00",
    "DE00 65743 67465 9878"
  ),
  createData(
    "05/05/2023",
    "Payment recieved",
    "+43,340.00",
    "DE00 6578 45786 6298"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650, borderSpacing: "0 0", padding: 0 }}
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
                  opacity: 1,
                  font: "Roboto, Regular",
                  fontSize: ".7rem",
                  fontWeight: "bold",
                  color: row.amount.includes("-") ? "#F97C28" : "#204F88",
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
