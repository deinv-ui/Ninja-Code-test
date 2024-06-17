import React from 'react'
import { SideBarContainer, Icon,  CloseIcon, 
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrapper,
    SideBarRoute } from './SideBarElements';
const SideBar = ({isOpen, toggle}) => {
    return(
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
            <SideBarMenu isOpen={isOpen} onClick={toggle}>
                <SideBarLink to="about" onClick={toggle}>
                About
                </SideBarLink>
                <SideBarLink to="course"onClick={toggle}>
                Course
                </SideBarLink>
                <SideBarLink to="review"onClick={toggle}>
                Review
                </SideBarLink>
                <SideBarLink to="register"onClick={toggle}>
                Register
                </SideBarLink>
            </SideBarMenu>
            <SideBtnWrapper>
                <SideBarRoute to='login'>Log In</SideBarRoute>
            </SideBtnWrapper>
        </SideBarWrapper>  
        </SideBarContainer>
        );

};

export default SideBar;