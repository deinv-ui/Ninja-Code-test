import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Cardsec, Cardh1, Card, Imgwrap,SecondImgwrap,ThirdImgwrap, Cardh2 } from './CourseElements';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
  NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink, NavRegister } from '../navbar/NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Course = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }


  return (
    <>
     <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
           NINJA CODE
          </NavLogo>
         

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

          </NavMenu>
          
              <NavRegister to="/Register">Don't have an account?</NavRegister>
           
          <NavBtn>
            <NavBtnLink to="/Login">Log In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    
    <Cardsec>
        <Cardh1>Courses</Cardh1>
        <Carousel responsive={responsive}>
            <Card>
            <Cardh2>Fundamentals</Cardh2>
            <Imgwrap ></Imgwrap>
            </Card>
            <Card>
            <Cardh2>Python</Cardh2>
            <SecondImgwrap>  <NavLinks to="/Python">Click Here</NavLinks></SecondImgwrap>
            </Card>
            <Card>
            <Cardh2>Java</Cardh2>
            <ThirdImgwrap></ThirdImgwrap>
            </Card>
            
            
            
        
        </Carousel>  
    </Cardsec>
    </>
  )
}

export default Course;
