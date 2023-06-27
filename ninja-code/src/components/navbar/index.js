import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
  NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
          Ninja Code
          </NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>

           {/*Container for actual menu items*/}
          <NavMenu>
            <NavItems>
              <NavLinks to="about">About</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to="courses">Courses</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to="review">Review</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to="register">Register</NavLinks>
            </NavItems>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    
    </>
  )
}

export default Navbar
