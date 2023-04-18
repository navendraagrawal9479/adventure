import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import TitleDescriptionWidget from '../widgets/TitleDescriptionWidget';

const MiddleWorking = () => {
  const data = useSelector(state => state.data);

  return (
    <Box
      sx={{
        m: 5,
      }}
    >
      <Stack
        gap={5}
      >
        <Typography
          style={{
            fontSize: "2rem",
            fontFamily: "'Oswald', sans-serif"
          }}
        >
          {data.middle_section.heading}
        </Typography>
        {data.middle_section.content.map(item => {
          return <TitleDescriptionWidget key = {item.title} title = {item.title} description = {item.content} />
        })}
      </Stack>
    </Box>
  )
}

export default MiddleWorking