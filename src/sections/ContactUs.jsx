import { Box, Stack } from '@mui/material';
import React from 'react'
import Map from '../components/Map';
import MapContent from '../components/MapContent';

const ContactUs = () => {
  return (
    <Box
      sx={{
        height: '100vh'
      }}
    > 
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <MapContent />
        <Map />
      </Stack>
    </Box>
  )
}

export default ContactUs