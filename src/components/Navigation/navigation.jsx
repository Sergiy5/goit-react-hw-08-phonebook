import { useAuth } from 'hooks';
import { NavigationStyled, NavLinkStyled } from './navigation.styled';

const Navigation = () => {
const { isLoggedIn } = useAuth();
    
  return (
    <NavigationStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && (
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      )}
    </NavigationStyled>
  );
};

export default Navigation;
