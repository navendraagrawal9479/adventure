import { Box, Button, Stack } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../styled/Dropdown';
import StyledButton from '../styled/StyledButton';
import language from '../assets/language';
import { setLanguage } from '../slices/dataSlice';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const Navbar = () => {
  const data = useSelector(state => state.data);
  const lang = useSelector(state => state.language);
  const dispatch = useDispatch();
  const newLanguage = lang === language.ENGLISH ? language.HINDI : language.ENGLISH;

  const changeLanguage = () => {
    dispatch(setLanguage({language: newLanguage}));
  }

  return (
    <Box
      sx={{
        p: 5,
        width: '80%',
        margin: '0 auto'
      }}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={2}
        >
          <StyledButton>
            {data.buttons.home}
          </StyledButton>
          <Button>
            <Dropdown
              options = {data.destinations}
              heading = {data.buttons.destination}
            />
          </Button>
        </Stack>
        <StyledButton
          onClick={changeLanguage}
          startIcon = {<ChangeCircleIcon style={{fontSize: '1.5rem'}} />}
        >
          {newLanguage}
        </StyledButton>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={2}
        >
          <StyledButton>
            {data.buttons.faq}
          </StyledButton>
          <StyledButton>
            {data.buttons.reviews}
          </StyledButton>
          <StyledButton>
            {data.buttons.contact}
          </StyledButton>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar