import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const MainSection = () => {
  const data = useSelector((state) => state.data);

  return (
    <Box
      sx={{
        m: "3rem",
        p: 2,
      }}
    >
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <Typography
          variant='h2'
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: "bold",
            color: "#fff",
            m: "2rem auto",
          }}
        >
          {data.main_page.heading}
        </Typography>
        <Typography
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "2rem",
            fontFamily: "'Source Sans 3', sans-serif"
          }}
        >
          {data.main_page.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'transparent',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            fontFamily: "'Oswald', sans-serif",
            "&:hover": {
              backgroundColor: '#fff',
              color: '#000'
            },
            border: '2px solid #fff',
            borderRadius: '1.5rem',
            p: '0.5rem 2.5rem'
          }}
        >
          {data.main_page.button}
        </Button>
      </Stack>
    </Box>
  );
};

export default MainSection;
