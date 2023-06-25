import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AuthNavContainer } from './authNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <Button variant="contained" component={NavLink} to="/register">
        Register
      </Button>
      <Button variant="contained" component={NavLink} to="/login">
        Log In
      </Button>
    </AuthNavContainer>
  );
};
