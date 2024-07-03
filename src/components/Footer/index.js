import React from 'react';
// import styled from 'styled-components';
import {CustomLink, FooterBelow, FooterContainer, FooterCopyright, FooterLinks, FooterLinksdiv, FooterSectionPadding, FooterBelowLinks,} from './FooterElements';
const Footer = () => {

  return (
    <>
  <FooterContainer>
    <FooterSectionPadding>
      <FooterLinks>
        <FooterLinksdiv>
          <h4>For Business</h4>
            <CustomLink href="/employer">
            <p>Employer</p>
            </CustomLink>
            <CustomLink href="/studyplan">
            <p>Study Plan</p>
            </CustomLink>
            <CustomLink href="/individual">
            <p>Individual</p>
            </CustomLink>
        </FooterLinksdiv>

        <FooterLinksdiv>
          <h4>Resources</h4>
            <CustomLink href="/resouces">
            <p>Resouces</p>
            </CustomLink>
            <CustomLink href="/Testimonials">
            <p>Testimonials</p>
            </CustomLink>
        </FooterLinksdiv>

        <FooterLinksdiv>
          <h4>Partners</h4>
            <CustomLink href="/employer">
            <p>Swing Tech</p>
            </CustomLink>
        </FooterLinksdiv>

        <FooterLinksdiv>
          <h4>Company</h4>
            <CustomLink href="/about">
            <p>About</p>
            </CustomLink>
            <CustomLink href="/press">
            <p>Press</p>
            </CustomLink>
            <CustomLink href="/Job">
            <p>Job</p>
            </CustomLink>
            <CustomLink href="/Contact">
            <p>Contact</p>
            </CustomLink>
        </FooterLinksdiv>
      
      <FooterBelow>
        <FooterCopyright>
          <p>
            @{new Date().getFullYear()} NinjaCode. All right reserved.
          </p>
        </FooterCopyright>
        <FooterBelowLinks>
            <CustomLink href="/terms"><div><p>Terms & Conditions</p></div></CustomLink>
            <CustomLink href="/privacy"><div><p>Privacy</p></div></CustomLink>
            <CustomLink href="/security"><div><p>Security</p></div></CustomLink>
            <CustomLink href="/cookie"><div><p>Cookies Declaration</p></div></CustomLink>
        </FooterBelowLinks>
      </FooterBelow>
      </FooterLinks>
    </FooterSectionPadding>
  </FooterContainer>
</>
  )
}

export default Footer;
