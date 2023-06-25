import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormStyled,
 } from '../Styled/formStyled.styled';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { nanoid } from 'nanoid';

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
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id={nanoid()}
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id={nanoid()}
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </FormStyled>
  );
};
