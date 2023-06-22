import styled from 'styled-components';

export const FormStyled = styled.form`
  margin: 10px;
  width: 320px;
`;
export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 700;
`;
export const InputStyled = styled.input`
margin-top: 5px;
  border-radius: 4px;
  padding: 5px;
`;

export const ButtonStyled = styled.button`
  background-color: #81a2e7;
  border-radius: 3px;
  font-weight: 700;
  padding: 5px;
  box-shadow: 5px 5px 5px #2584bb;
  &:active {
    background-color: #1e3abb;
    box-shadow: 2px 2px 2px #2584bb;
  }
  &:hover {
    background-color: #5c72d6;
    cursor: pointer;
  }
`;
