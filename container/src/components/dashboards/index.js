import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../../../shared/nav";
import { navConfig } from "./navConfig";

export default ({ userDetails, userPemission }) => {
  const [open, setOpen] = React.useState(false);
  let { type } = useParams();
  let url = "https://samples.revealbi.io/upmedia/sales.jsp";
  switch (type) {
    case "marketing":
      url = "https://samples.revealbi.io/upmedia/marketing.jsp";
      break;
    case "campaigns":
      url = "https://samples.revealbi.io/upmedia/campaigns.jsp";
      break;
    case "manufacturing":
      url = "https://samples.revealbi.io/upmedia/manufacturing.jsp";
      break;
    default:
      break;
  }
  return (
    <>
      <Nav
        openNav={open}
        onCloseNav={() => setOpen(false)}
        navConfig={navConfig}
        userDetails={userDetails}
        userPemission={userPemission}
      />
      <div style={{ marginTop: -14, marginLeft: 225 }}>
        <iframe
          title="Dashboard"
          src={url}
          width="100%"
          height="1000px"
          style={{ border: "none" }}
          allowfullscreen={true}
        />
      </div>
    </>
  );
};
