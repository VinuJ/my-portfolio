import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 5rem;
  /* margin-top: -5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  z-index: 1;
  padding: 0 1.5rem;
  max-width: 70rem;
`;

export const NavLogo = styled.a`
  color: #fff;
  /* justify-self: flex-start; n/a for flexbox layout*/
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    border: 1px solid red;
    &:hover {
      color: red;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 5rem;
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

// Allows for Next.js Link element styling
export default (href: any) => (
  <Link prefetch href={href} passHref>
    <NavLogo></NavLogo>
  </Link>
);
