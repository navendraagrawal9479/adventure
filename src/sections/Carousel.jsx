import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const Carousel = () => {
  const data = useSelector((state) => state.data);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const previousImage = () => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  };

  const nextImage = () => {
    if (index === data.images.carousel_imgs.length - 1) return;
    setIndex((prev) => prev + 1);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        textAlign: "center",
        mt: 5,
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "2rem auto",
        }}
      >
        <Typography
          style={{
            fontSize: "2rem",
            fontFamily: "'Oswald', sans-serif",
          }}
        >
          {data.carousel_section.heading}
        </Typography>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
          flexWrap={"wrap"}
          direction={"row"}
          sx={{
            m: 2,
          }}
        >
          {data.images.carousel_imgs.map((image, index) => {
            return (
              <img
                key={index}
                alt={`img-${index}`}
                src={image}
                style={{
                  width: "30%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpen(true);
                  setIndex(index);
                }}
              />
            );
          })}
        </Stack>
      </Box>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        fullWidth
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%", // Set your width here
              minWidth: "900px",
              background: "none",
              boxShadow: "none",
            },
          },
        }}
      >
        <DialogTitle>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {`${index + 1}/${data.images.carousel_imgs.length}`}
            </Typography>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close
                sx={{ color: "#fff", fontSize: "2rem", fontWeight: "bold" }}
              />
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <Button onClick={previousImage}>
              <ArrowCircleLeftRoundedIcon sx={{color: '#fff', fontSize: '3rem'}} />
            </Button>

            <img
              alt={`img-${index}`}
              src={data.images.carousel_imgs[index]}
              style={{
                width: "60%",
                height: "auto",
              }}
            />

            <Button onClick={nextImage}>
              <ArrowCircleRightRoundedIcon sx={{color: '#fff', fontSize: '3rem'}} />
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Carousel;
