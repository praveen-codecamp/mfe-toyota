import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function Papers({ handleCloses }) {
  const url = window.location.href;
  return (
    <Grid
      container
      spacing={0}
      sx={{
        background: "#fcf7f7",
        px: 2,
      }}
    >
      <Grid
        item
        lg={2}
        sx={{
          overflowY: "scroll",
          height: "400px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mt: "21px",
            fontSize: 13,
          }}
        >
          Select Your Yard
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "6px",
            fontSize: 13,
          }}
        >
          CBU Import Vechile Receving
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "6px",
            fontSize: 13,
          }}
        >
          Yard in Status Input
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "6px",
            fontSize: 13,
          }}
        >
          Yard Out
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "6px",
            fontSize: 13,
          }}
        >
          Buy off
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "6px",
            fontSize: 13,
          }}
        >
          Vechile Information & Status Edit
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "6px",
            fontSize: 13,
          }}
        >
          kakudai-hyo Print Order
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "6px",
            fontSize: 13,
          }}
        >
          Damaged Car Registration
        </Typography>
        <Typography
          variant="body2"
          sx={{
            bgcolor: "#cccccc",
            fontWeight: "bold",
            fontSize: 13,
            mt: "6px",
            mr: "38px",
          }}
        >
          Master Maintenance
          <KeyboardArrowRightOutlinedIcon
            sx={{
              position: "absolute",
              left: "159px",
              bgcolor: "#cccccc",
              fontSize: 21,
            }}
          />
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "6px",
            fontSize: 13,
          }}
        >
          <Link to={`/property/callingsheet`} onClick={() => handleCloses()}>
            Calling Sheet Making
          </Link>
        </Typography>
      </Grid>
      <Grid
        item
        lg={3}
        sx={{
          ml: "35px",
        }}
      >
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            mt: "21px",
          }}
        >
          <Link to={`/property/search`} onClick={() => handleCloses()}>
            Model Master Maintenance
          </Link>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          <Link to={`/property/logistics`} onClick={() => handleCloses()}>
            Logistics Flow Maintenance
          </Link>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          DLR Group Code
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          Plant Master
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          Yard Master
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          Yard Operation Maintenance
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          DLR Group Maintenance
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          Domestic Model/sfx List Conversion Master
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          Laos PIO Conversion Master
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "8px",
            fontSize: 13,
          }}
        >
          Offline Spec Option Master Maintenance
        </Typography>
      </Grid>
      <Grid
        item
        lg={4}
        sx={{
          ml: "10px",
        }}
      >
        <Typography
          sx={{
            mt: "21px",
            fontSize: 13,
          }}
        >
          Yard Login Master
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            position: "relative",
            mt: "8px",
            fontSize: 13,
          }}
        >
          <KeyboardArrowDownOutlinedIcon
            sx={{
              position: "absolute",
              right: "410px",
              fontSize: 21,
            }}
          />
          Vechile Information Master
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            position: "relative",
            mt: "8px",
            fontSize: 13,
          }}
        >
          <KeyboardArrowDownOutlinedIcon
            sx={{
              position: "absolute",
              right: "410px",
              fontSize: 21,
            }}
          />
          Delivery Operation Master
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            position: "relative",
            mt: "8px",
            fontSize: 13,
          }}
        >
          <KeyboardArrowDownOutlinedIcon
            sx={{
              position: "absolute",
              right: "410px",
              fontSize: 21,
            }}
          />
          Yard Operation Master
        </Typography>
      </Grid>
      <Grid
        item
        lg={2}
        sx={{
          position: "absolute",
          right: 10,
          top: 5,
        }}
      >
        <CloseOutlinedIcon
          sx={{
            backgroundColor: "#FFFFFF",
          }}
          onClick={() => handleCloses()}
        />
      </Grid>
    </Grid>
  );
}
