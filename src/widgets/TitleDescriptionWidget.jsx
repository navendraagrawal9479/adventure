import { Stack, Typography } from "@mui/material";
import React from "react";

const TitleDescriptionWidget = (props) => {
  return (
    <Stack gap={3}>
      <Typography
        style={{
          color: "#000",
          fontSize: "1.8rem",
          fontFamily: "'Source Sans 3', sans-serif",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        style={{
          color: "#000",
          fontSize: "1.2rem",
          fontFamily: "'Source Sans 3', sans-serif",
        }}
      >
        {props.description}
      </Typography>
    </Stack>
  );
};

export default TitleDescriptionWidget;
