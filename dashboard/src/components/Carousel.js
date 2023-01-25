import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import img1 from "../../public/assets/img/bp1.jpg";
import img2 from "../../public/assets/img/bp2.jpg";
import img3 from "../../public/assets/img/bp3.jpg";

export default () => {
  const items = [
    {
      name: "Pizza Begin",
      imgURL: img1,
    },
    {
      name: "Mia Luz",
      imgURL: img2,
    },
    {
      name: "Nuda Swim",
      imgURL: img3,
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysInvisible={true}
      animation="slide"
      activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );

  function Item(props) {
    return (
      <Paper className="item">
        <img
          className="imageCarousel"
          src={props.item.imgURL}
          alt={props.item.name}
          width={400}
          height={500}
        />
      </Paper>
    );
  }
};
