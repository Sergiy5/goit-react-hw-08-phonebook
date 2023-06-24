import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ParagrafStyled, Wraper } from './userMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  return (
    <Wraper>
      <ParagrafStyled>{user.email} </ParagrafStyled>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wraper>
  );
};
