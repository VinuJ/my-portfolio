import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from "./SidebarElements";

interface IProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar = (props: IProps) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon onClick={props.toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={props.toggleSidebar}>About</SidebarLink>
          <SidebarLink to="work">Work</SidebarLink>
          <SidebarLink to="contact">Contact</SidebarLink>
          <SidebarLink to="resume">Resume</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
