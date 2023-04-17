import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const Main = () => {
  const data = useSelector(state => state.data);

  return (
    <Box>
      <img 
        alt = 'background'
        src = {data.images.main_img}
        style={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </Box>
  )
}

export default Main