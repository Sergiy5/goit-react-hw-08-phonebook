import { Button, TextField } from '@mui/material';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormStyled,
} from '../Styled/formStyled.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
       dispatch(
      register({
        name: form.elements.name.value,
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
        label="Username"
        name="name"
        type="text"
        variant="outlined"
        margin="normal"
      />
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
        Register
      </Button>
    </FormStyled>
  );
};
