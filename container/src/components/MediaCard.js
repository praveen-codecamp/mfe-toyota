import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import card from "../../public/assets/img/live-from-space.jpg";

export default function ActionAreaCard() {
  const newsFeeds = [
    {
      title: "Business",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
    },
    {
      title: "Politics",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
    },
    {
      title: "Economic",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
    },
  ];
  return (
    <React.Fragment>
      {newsFeeds.map((news) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={news.title}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={card}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.discription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </React.Fragment>
  );
}
