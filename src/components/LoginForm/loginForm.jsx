import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from '../Styled/formStyled.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="on">
      <LabelStyled >
        Email
        <InputStyled type="email" name="email" />
      </LabelStyled>
      <LabelStyled >
        Password
        <InputStyled type="password" name="password" />
      </LabelStyled>
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </FormStyled>
  );
};
