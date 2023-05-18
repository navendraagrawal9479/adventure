import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: 'transparent',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  fontFamily: "'Fjalla One', sans-serif",
  "&:hover": {
    backgroundColor: 'transparent',
  }
});

export default StyledButton;