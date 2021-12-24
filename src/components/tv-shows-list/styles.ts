import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const Wrapper = styled.ul`
  list-style: none;
  padding: 30px 0 80px 0;
  position: relative;
`;

export const Spinner = styled(CircularProgress)`
  && {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;