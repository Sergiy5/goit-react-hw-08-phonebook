import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  background-color: #81a2e7;
  border-radius: 4px;
  padding: 5px;
  color: black;
  box-shadow: 5px 5px 5px #5470ad;
`;

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 150px;
  font-weight: 700;
`;