import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Hamburger,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";

interface IProps {
  toggleSidebar: () => void
}

const Navbar = (props: IProps) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/">VJ</NavLogo>
        </NavbarContainer>
        <Hamburger onClick={props.toggleSidebar}>
          <FaBars />
        </Hamburger>
        <NavMenu>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="work">Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="">Resume</NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
