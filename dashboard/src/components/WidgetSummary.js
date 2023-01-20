import React from "react";
// @mui
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTrafficBySite({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {list.map((site) => (
            <Paper
              key={site.title}
              variant="outlined"
              sx={{
                py: 2.5,
                textAlign: "left",
                padding: ".4rem",
                borderLeft: ".4rem solid",
                borderLeftColor: site.color || "#0d8237",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6} lg={8}>
                  <Box sx={{ mb: 0.9, textAlign: "left" }}>
                    <Typography variant="subtitle1">{site.title}</Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {site.subtitle}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {site.discription}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ mt: "1.5rem" }}>
                  <Box sx={{ mb: 0.9, textAlign: "right" }}>
                    <Typography variant="subtitle1">{site.amount}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {site.amount}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
