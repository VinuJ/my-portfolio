import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Hamburger,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/">VJ</NavLogo>
        </NavbarContainer>
        <Hamburger>
          <FaBars />
        </Hamburger>
        <NavMenu>
          <NavItem>
            <NavLinks to="#about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="#work">Work</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="#contact">Contact</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="">Resume</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
