import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <Container>
      <Logo />
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="#">About</StyledLink>
      <StyledLink to="/myteam">Team Stats</StyledLink>
      <StyledLink to="/mystats">My Stats</StyledLink>
      <StyledLink to="/mappool">Map Pool</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #000000;
  margin: 0 auto;
  height: 50px;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin: 0 auto;
  text-transform: uppercase;
  position: relative;
  &:before {
    content: "";
    display: block;
    height: 5px;
    width: 0%;
    background-color: #fff;
    transition: all ease-in-out 250ms;
  }
  &:hover::before {
    width: 100%;
    background-color: #fff;
    position: relative;
  }
`;
export default Nav;
