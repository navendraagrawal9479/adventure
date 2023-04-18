import { Box, Stack } from '@mui/material';
import React from 'react'
import MiddleWorking from '../components/MiddleWorking';
import { useSelector } from 'react-redux';

const Middle = () => {
  const data = useSelector(state => state.data);

  return (
    <Box 
      sx={{
        minHeight: '100vh',
      }}
    >
      <Stack
        direction={'row'}
        gap={0}
        justifyContent={'space-between'}
      >
        <MiddleWorking />
        <img 
          alt = 'how it works'
          src = {data.images.middle_section_img}
          style = {{
            width: '50vw',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </Stack>
    </Box>
  )
}

export default Middle