import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';

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
          objectPosition: 'center',
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: -1,
        }}
      ></Box>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column-reverse',
          minHeight: '80vh'
        }}
      >
        <MainSection />
      </Box>
    </Box>
  )
}

export default Main