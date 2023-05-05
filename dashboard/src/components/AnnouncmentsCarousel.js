import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const items = [
    {
      message:
        "Abu Dhabi Commercial Bank and peers Union National Bank and Al Hilal Bank merged to create a banking heavyweight with 423 billion dirhams ($115 billion) in assets, the third biggest in the United Arab Emirates.",
      linkText: "Read more",
    },
    {
      message:
        "ADCB Group is a leading banking institution in the UAE providing more than 1 million customers with a full suite of products and services, spanning Consumer Banking, Corporate & Investment Banking, Treasury & Investments.",
      linkText: "Read more",
    },
    {
      message:
        "We believe good governance is the cornerstone of success. It underpins our integrity, reinforces the trust and confidence our investors place in us, and contributes to a strong and disciplined culture.",
      linkText: "Read more",
    },
  ];

  return (
    <Paper
      sx={{
        background: "#054FA8 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        px: 1,
        py: 1,
        height: matches ? "12rem" : undefined,
      }}
    >
      <Chip
        label="Announcments"
        variant="outlined"
        sx={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          borderRadius: ".3rem",
          color: "#0179BF",
          font: "Roboto, Regular",
          fontSize: ".8rem",
          fontWeight: "bold",
          m: 1,
          width: "130px",
          height: "30px",
        }}
      />
      <Carousel
        navButtonsAlwaysInvisible={true}
        animation="slide"
        activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Paper>
  );

  function Item(props) {
    return (
      <>
        <Typography
          variant="body1"
          sx={{
            opacity: 1,
            color: "#FFFFFF",
            font: "Roboto, Regular",
            fontSize: ".8rem",
            px: 1,
            py: 1,
          }}
        >
          {props.item.message}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            opacity: 1,
            color: "#FFB400",
            font: "Roboto, Regular",
            fontSize: ".8rem",
            px: 1,
          }}
        >
          {props.item.linkText}
        </Typography>
      </>
    );
  }
};
