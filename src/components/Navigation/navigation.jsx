import { Button } from '@mui/material';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { NavigationStyled, NavLinkStyled } from './navigation.styled';

const Navigation = () => {
const { isLoggedIn } = useAuth();
    
  return (
    <NavigationStyled>
      <Button variant="contained" component={NavLink} to="/">
        Home
      </Button>
      
      {isLoggedIn &&
        <Button variant="contained" component={NavLink} to="/contacts">
        Contacts
      </Button>
      }
    </NavigationStyled>
  );
};

export default Navigation;
