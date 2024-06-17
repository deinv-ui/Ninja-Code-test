import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
  NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink, NavRegister } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle }) => {
  const toggleHome = () => {
   
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'onClick={toggleHome}>
           NINJA CODE
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>

           {/*Container for actual menu items*/}
          <NavMenu>
            <NavItems>
              <NavLinks to="about">About</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to="/Course">Courses</NavLinks>
            </NavItems>

            
            <NavItems>
              <NavLinks to="review">Review</NavLinks>
            </NavItems>

            {/* <NavItems>
              <NavRegister to="/Register">Register</NavRegister>
            </NavItems> */}
          </NavMenu>
          
              <NavRegister to="/Register">Don't have an account?</NavRegister>
           
          <NavBtn>
            <NavBtnLink to="/Login">Log In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    
    </>
  )
}

export default Navbar
