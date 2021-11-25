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
  NavSpace,
} from "./NavbarElements";

interface IProps {
  toggleSidebar: () => void;
}

const Navbar = (props: IProps) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">Vinu Jey</NavLogo>
        <Hamburger onClick={props.toggleSidebar}>
          <FaBars />
        </Hamburger>
        <NavMenu>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500} spy={true}>About</NavLink>
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
        <NavSpace></NavSpace>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
