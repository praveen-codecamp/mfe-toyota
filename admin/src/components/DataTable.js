import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import palette from "../../../shared/theme/palette";
import { isAllowed } from "../../../shared/acl";

export default ({ data, handleCreateEdit, handleDelete, userDetails, api }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleDeleteConfirmation = () => {
    handleDelete(selectedItem);
    setOpen(false);
    setSelectedItem(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
  const getArrayItems = (data) => {
    let arItem = [];
    data.map((item) => {
      item.description && arItem.push(item.description);
    });
    return arItem.join(",");
  };
  const renderDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-delete"
        aria-describedby="alert-dialog-delete-element"
      >
        <DialogTitle id="alert-dialog-delete" color={palette.error.main}>
          {"Do you really want to delete this element? This cannot be undone."}
        </DialogTitle>
        <DialogActions sx={{ p: 2 }}>
          <Button
            variant="outlined"
            onClick={handleDeleteConfirmation}
            autoFocus
          >
            Yes
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  return (
    <>
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
                        <>
                          {key === "logo" && item[key] ? (
                            <img
                              width="30rem"
                              height="30rem"
                              src={item[key]}
                              loading="lazy"
                            />
                          ) : Array.isArray(item[key]) ? (
                            getArrayItems(item[key])
                          ) : (
                            item[key]
                          )}
                        </>
                      </TableCell>
                    ))}
                    <TableCell sx={sxbdcell} align="right">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ fontWeight: 400, fontSize: ".7rem", mr: 1 }}
                        onClick={() =>
                          handleCreateEdit && handleCreateEdit(item)
                        }
                        disabled={
                          api &&
                          userDetails &&
                          !isAllowed(
                            (userDetails && userDetails?.role) || "guest",
                            api,
                            "edit"
                          )
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ fontWeight: 400, fontSize: ".7rem" }}
                        onClick={() => handleClickOpen(item)}
                        disabled={
                          api &&
                          userDetails &&
                          !isAllowed(
                            userDetails?.role || "guest",
                            api,
                            "delete"
                          )
                        }
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
      {renderDialog()}
    </>
  );
};
