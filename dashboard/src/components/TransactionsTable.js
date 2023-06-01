import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import palette from "../../../shared/theme/palette";

export default function BasicTable({ transactions }) {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650, borderSpacing: "0 0", padding: 0 }}
        aria-label="latest transactions"
        size="small"
      >
        <TableBody>
          {transactions.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  color: palette.grey.light,
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
                    color: palette.grey.light,
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
                className="redacted"
                sx={{
                  opacity: 1,
                  font: "Roboto, Regular",
                  fontSize: ".7rem",
                  fontWeight: "bold",
                  color:
                    row.type === "dr"
                      ? palette.secondary.main
                      : palette.primary.main,
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
