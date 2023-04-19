import { Box } from "@mui/material";

const Map = () => {
  return (
    <Box
      sx={{
        width: '60%',
        mt: '10%',
        flex: 1
      }}
    >
      <iframe
        src= 'https://www.google.com/maps/embed?pb=!3m1!4b1!4m6!3m5!1s0x872eaaaaaaaaaaab:0xc52c81d218921a6e!8m2!3d34.0489281!4d-111.0937311!16s%2Fg%2F11spph733c'
        width = '650px'
        height = '450px'
        title = 'Map'
        style = {{border: 0}}
        allowfullscreen = ""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </Box>
  );
};

export default Map;
