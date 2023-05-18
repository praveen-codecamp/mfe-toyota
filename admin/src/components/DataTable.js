import React from "react";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import palette from "../../../shared/theme/palette";

export default ({ data, handleCreateEdit, handleDelete }) => {
  const sxhdcell = {
    font: "Roboto, medium",
    padding: "5px",
    fontSize: "0.6rem",
    border: "none",
  };
  const sxbdcell = {
    padding: "5px",
    fontWeight: "bold",
    color: palette.primary.main,
    fontSize: "0.6rem",
    border: "none",
  };
  return (
    <TableContainer
      component={Paper}
      sx={{ border: "none", boxShadow: "none" }}
    >
      <Table aria-label="account table">
        <TableHead>
          <TableRow>
            {data?.headCell?.map((value) => {
              return (
                <TableCell key={value} sx={sxhdcell}>
                  {value}
                </TableCell>
              );
            })}
            <TableCell sx={sxhdcell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.bodyCell &&
            data?.bodyCell?.length &&
            data.bodyCell.map((item, i) => {
              return (
                <TableRow key={i}>
                  {data.objKeysToDisplay.map((key) => (
                    <TableCell
                      key={key}
                      component="th"
                      scope="row"
                      className="redacted"
                      sx={sxbdcell}
                    >
                      {item[key]}
                    </TableCell>
                  ))}
                  <TableCell sx={sxbdcell} align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ fontWeight: 400, fontSize: ".7rem", mr: 1 }}
                      onClick={() => handleCreateEdit && handleCreateEdit(item)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ fontWeight: 400, fontSize: ".7rem" }}
                      onClick={() => handleDelete && handleDelete(item)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
