import { Box, Stack } from '@mui/material';
import React from 'react'
import Map from '../components/Map';
import MapContent from '../components/MapContent';

const ContactUs = () => {
  return (
    <Box
    > 
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap = {5}
      >
        <MapContent />
        <Map />
      </Stack>
    </Box>
  )
}

export default ContactUs