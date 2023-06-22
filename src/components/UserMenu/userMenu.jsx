import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { BtnLogOutStyled, ParagrafStyled, Wraper } from './userMenu.styled';
// import { ButtonStyled } from 'components/Styled/formStyled.styled';
// import { Container } from 'components/mainContainer.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  return (
    <Wraper>
      <ParagrafStyled>Welcome {user.name} </ParagrafStyled>
      <BtnLogOutStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLogOutStyled>
    </Wraper>
  );
};
