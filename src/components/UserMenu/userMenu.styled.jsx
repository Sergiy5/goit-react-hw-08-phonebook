import styled from "styled-components";

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  height: 30px;
  width: 280px;
  font-weight: 700;
`
export const BtnLogOutStyled = styled.button`
  background-color: #81a2e7;
  /* height: 20px; */
  border-radius: 3px;
  font-weight: 800;
  padding: 5px;
  border: none;
  box-shadow: 5px 5px 5px #2584bb;
  &:active {
    background-color: #1e3abb;
    box-shadow: 3px 3px 3px #2584bb;
  }
  &:hover {
    background-color: #3653d3;
  }
`;
export const ParagrafStyled = styled.p`
  margin: 0;
`;