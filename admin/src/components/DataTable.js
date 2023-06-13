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
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";
import palette from "../../../shared/theme/palette";
import { isAllowed } from "../../../shared/acl";
import styled from "@emotion/styled";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: white;
  }
  &:nth-of-type(even) {
    background-color: ${palette.primary.lighter};
  }
  & > td {
    color: ${palette.primary.lighter};
  }
`;

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
    px: "5px",
    py: "10px",
    fontSize: "0.8rem",
    border: "none",
  };
  const sxbdcell = {
    px: "5px",
    py: "0px",
    color: palette.grey.darker,
    fontSize: "0.8rem",
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
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            alignItems={"center"}
          >
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-start"
              sx={{ mt: 2 }}
            >
              <WarningAmberIcon sx={{ color: palette.error.main, mr: 2 }} />
              <Typography>
                {
                  " Do you really want to delete this element? This cannot be undone."
                }
              </Typography>
            </Box>
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 1 }}
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
            <TableRowStyled>
              {data?.headCell?.map((value) => {
                return (
                  <TableCell key={value} sx={sxhdcell}>
                    {value}
                  </TableCell>
                );
              })}
              <TableCell sx={sxhdcell}></TableCell>
            </TableRowStyled>
          </TableHead>
          <TableBody>
            {data?.bodyCell &&
              data?.bodyCell?.length &&
              data.bodyCell.map((item, i) => {
                return (
                  <TableRowStyled key={i}>
                    {data.objKeysToDisplay.map((key) => (
                      <TableCell
                        key={key}
                        component="th"
                        scope="row"
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
                      <IconButton
                        aria-label="delete"
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
                        <ModeEditOutlineIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
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
                        <DeleteOutlineIcon />
                      </IconButton>
                    </TableCell>
                  </TableRowStyled>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {renderDialog()}
    </>
  );
};
