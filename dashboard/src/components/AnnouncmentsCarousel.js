import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default () => {
  const items = [
    {
      message:
        "Abu Dhabi Commercial Bank and peers Union National Bank and Al Hilal Bank merged to create a banking heavyweight with 423 billion dirhams ($115 billion) in assets, the third biggest in the United Arab Emirates.",
      linkText: "Read more",
    },
    {
      message:
        "Assurant Group is a leading banking institution in the UAE providing more than 1 million customers with a full suite of products and services, spanning Consumer Banking, Corporate & Investment Banking.",
      linkText: "Read more",
    },
    {
      message:
        "We believe good governance is the cornerstone of success. It underpins our integrity, reinforces the trust and confidence our investors place in us, and contributes to a strong and disciplined culture.",
      linkText: "Read more",
    },
  ];

  return (
    <>
      <Card className="min-w-full bg-blue-200">
        <CardHeader>
          <CardTitle>
            <Button>Announcments</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel
            navButtonsAlwaysInvisible={true}
            animation="slide"
            activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </CardContent>
      </Card>
    </>
  );
  function Item({ item }) {
    return <p>{item.message}</p>;
  }
};
