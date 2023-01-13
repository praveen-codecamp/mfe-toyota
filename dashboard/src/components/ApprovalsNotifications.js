import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";

import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import card from "../../public/assets/img/live-from-space.jpg";
export default function NotificationsAndApprovals() {
  const newsFeeds = [
    {
      title: "Business",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
        status : 'unread'
    },
    {
      title: "Politics",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
        status : 'read'
    },
    {
      title: "Economic",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
        status : 'read'
    },
  ];
  return (
    <React.Fragment>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Notifications"
        />
        <CardContent>
          {newsFeeds.map((news) => {
            return (
              <Card style={{ marginBottom: 15 }} key={news.title}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      {news.status ==='read' ? <NotificationsIcon />: <NotificationsNoneIcon/>}
                    </Avatar>
                  }
                  title={news.title}
                  subheader={news.discription}
                />
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
