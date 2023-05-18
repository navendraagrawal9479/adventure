import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TitleDescriptionWidget from "../widgets/TitleDescriptionWidget";

const MapContent = () => {
  const data = useSelector((state) => state.data);

  return (
    <Box
      sx={{
        width: "90%",
        m: "2rem",
        mt: "10rem",
      }}
    >
      <Stack justifyContent={"center"} gap={4}>
        <Typography
          style={{
            fontSize: "2rem",
            fontFamily: "'Fjalla One', sans-serif",
          }}
        >
          {data.map_section.heading}
        </Typography>
        <TitleDescriptionWidget
          title={data.map_section.title}
          description={data.map_section.description}
        />
        <TitleDescriptionWidget
          title={data.map_section.addressHead}
          description={data.map_section.address}
        />
        <Typography
          style={{
            color: "gray",
          }}
        >
          {data.map_section.phone}
        </Typography>
        <Button
          variant='contained'
          sx={{
            fontWeight: "bold",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            fontSize: "1.5rem",
            fontFamily: "'Fjalla One', sans-serif",
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
            },
            borderRadius: "1.5rem",
            p: "0.5rem 2.5rem",
            width: "50%",
          }}
        >
          {data.map_section.button}
        </Button>
      </Stack>
    </Box>
  );
};

export default MapContent;
