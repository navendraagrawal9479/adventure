import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: 'transparent',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  fontFamily: "'Oswald', sans-serif",
  "&:hover": {
    backgroundColor: 'transparent',
    color: '#000'
  }
});

export default StyledButton;