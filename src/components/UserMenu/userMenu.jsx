import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wraper } from './userMenu.styled';
import { ButtonStyled } from 'components/Styled/formStyled.styled';
// import { Container } from 'components/mainContainer.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user)

  return (
    <Wraper>
      <p>Welcome {user.name}</p>
      <ButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonStyled>
    </Wraper>
  );
};
