import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {
  const data = useSelector(state => state.data);

  return (
    <Box
      sx = {{
        height: '20vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#58c3d6'
      }}
    >
      <Typography
        style={{
          fontSize: '1.2rem'
        }}
      >
        {data.footer.text}
      </Typography>
    </Box>
  )
}

export default Footer