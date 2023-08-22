import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";
import Grid from "@mui/material/Grid";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const cardStyle = {
  minWidth: 175,
  height: "12vw",
  lineHeight: "0.8rem",
  padding: "2px  !important",
};

const renderCardContent = () => {
  return (
    <>
      <Typography sx={{ fontSize: 12, lineHeight: "0.8" }} gutterBottom>
        <span style={{ marginRight: "15px" }}>Model Code</span>
        <span style={{ marginRight: "15px" }}>GUN128R-DTTSXQ3</span>
        <span style={{ marginRight: "15px" }}>ET</span>
        <span style={{ marginRight: "15px" }}>22062023 02:0</span>
      </Typography>

      <Typography sx={{ fontSize: 12, lineHeight: "0.8" }} gutterBottom>
        <span style={{ marginRight: "15px" }}>Engine</span>
        <span style={{ marginRight: "15px" }}>1GD</span>
        <span style={{ marginRight: "15px" }}>5447321</span>
      </Typography>

      <Typography sx={{ fontSize: 12, lineHeight: "0.8" }} gutterBottom>
        <span style={{ marginRight: "15px" }}>Fin Dest.</span>
        <span style={{ marginRight: "15px" }}>801</span>
        <span style={{ marginRight: "15px" }}>98012</span>
        <span style={{ marginRight: "15px" }}>AUSTRALIA</span>
        <span style={{ marginRight: "15px" }}>QPKB</span>
      </Typography>

      <Typography sx={{ fontSize: 12, lineHeight: "0.8" }} gutterBottom>
        <span style={{ marginRight: "15px" }}>Color:</span>
        <span style={{ marginRight: "15px" }}>040FE20</span>
        <span style={{ marginRight: "15px" }}>S.White</span>
      </Typography>
    </>
  );
};

export default function CallingSheetCard() {
  return (
    <>
      <Grid container spacing={0.2} sx={{ ml: 1, mt: 1 }}>
        <Grid item xs={8}>
          <Card sx={cardStyle}>
            <CardContent
              sx={{ lineHeight: "0.8rem", padding: "2px !important" }}
            >
              <Typography sx={{ fontSize: 12, lineHeight: "0.8" }} gutterBottom>
                <Checkbox sx={{ paddingLeft: "0" }} checked={true} />
                <span style={{ marginRight: "15px" }}>1</span>
              </Typography>
              <Typography sx={{ fontSize: 12, lineHeight: "0.8" }} gutterBottom>
                <span style={{ marginRight: "15px" }}>Vin No.</span>
                <span style={{ marginRight: "15px" }}>MR0KA3CD301297721</span>
                <span style={{ alignItems: "right" }}>C25510/0071</span>
              </Typography>
              <Grid container>
                <Grid item xs={9}>
                  {renderCardContent()}
                </Grid>
                <Grid item xs={2} sx={{ marginRight: 2 }}>
                  <Box
                    sx={{
                      height: "60px",
                      width: "80px",
                      border: "1px solid",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        lineHeight: "0.8",
                        paddingTop: 1,
                        paddingLeft: 0.5,
                      }}
                    >
                      Sales Option
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h5">0</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card sx={{ width: "7vw", height: "12vw" }}>
            <CardContent>
              <Box sx={{ height: "md" }}></Box>
              <Typography variant="h5" component="div" sx={{ marginTop: 6 }}>
                E29
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
}
