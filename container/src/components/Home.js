import React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import homeBanner from "../../public/assets/img/transparent-banking-EN_tcm41-148897.jpeg";
import cardPhoto1 from "../../public/assets/img/live-from-space.png";
import cardPhoto2 from "../../public/assets/img/trending-kyc2-jan21_tcm41-382781.jpg";
import cardPhoto3 from "../../public/assets/img/trending_now188x210-refer-to-friend_tcm41-380835.jpg";
import palette from "../../../shared/theme/palette";

function Copyright() {
  const packageJson = require("../../package.json");
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved. Container version ${
        packageJson.version
      }`}
    </Typography>
  );
}

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box maxWidth="maxWidthXl" sx={{ marginTop: "64px" }}>
      <Container
        maxWidth="maxWidthXl"
        component="main"
        sx={{ padding: "0 !important" }}
      >
        <Grid
          container
          style={{
            minHeight: window.innerHeight - 64,
            backgroundColor: "#000",
            backgroundImage: `url(${homeBanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            overflow: "hidden",
            color: "#FFF",
          }}
          className="home-bannner"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={10} style={{ position: "relative" }}>
            {/* Hero unit */}
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="inherit"
              gutterBottom
            >
              Meet All of Your Banking And Financial Needs
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="inherit"
              component="p"
            >
              Our internet banking portal provides personal banking services
              that gives you complete control over all your banking demands
              online.
            </Typography>
            {/* End hero unit */}
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="maxWidthXl"
        component="main"
        sx={{ padding: "0 !important" }}
      >
        <Grid
          container
          style={{
            minHeight: window.innerHeight - 64,
            backgroundColor: "#e4e4e4 !important",
            backgroundImage: "",
            position: "relative",
            overflow: "hidden",
          }}
          className="home-trending"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            spacing={3}
            sx={{ mx: matches ? "12rem" : undefined }}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Trending now</Typography>
            </Grid>
            <Grid item xs={12} md={8} lg={4} style={{ position: "relative" }}>
              <Card style={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Important Information
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="div"
                    >
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                    }}
                  ></Box>
                </Box>
                <CardMedia
                  component="img"
                  image={cardPhoto1}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={8} lg={4} style={{ position: "relative" }}>
              <Card style={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      ACDB Exclusive Offers
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="div"
                    >
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                    }}
                  ></Box>
                </Box>
                <CardMedia
                  component="img"
                  image={cardPhoto2}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={8} lg={4} style={{ position: "relative" }}>
              <Card style={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Response to Covid-19
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="div"
                    >
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                    }}
                  ></Box>
                </Box>
                <CardMedia
                  component="img"
                  image={cardPhoto3}
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="maxWidthXl"
        component="footer"
        style={{
          backgroundColor: palette.primary.light,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Grid
          container
          justify="space-evenly"
          style={{
            backgroundColor: palette.primary.light,
            padding: 20,
          }}
        >
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography
                variant="h6"
                color={palette.primary.contrastText}
                gutterBottom
              >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      variant="subtitle1"
                      color={palette.primary.contrastText}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box
          style={{
            backgroundColor: palette.primary.main,
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </Box>
  );
}
