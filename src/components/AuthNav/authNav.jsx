import { AuthNavContainer, AuthNavLinkStyled } from './authNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavLinkStyled  to="/register">
        Register
      </AuthNavLinkStyled>
      <AuthNavLinkStyled  to="/login">
        Log In
      </AuthNavLinkStyled>
    </AuthNavContainer>
  );
};
