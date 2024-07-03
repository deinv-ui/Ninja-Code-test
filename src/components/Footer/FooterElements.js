import styled from 'styled-components';
import {Link as LinkS } from 'react-router-dom'

export const FooterContainer = styled.div`
  height: 100%;
  background-color: #2d2d32;
  margin-top: 200px;
  text-decoration: none;

  @media screen and (max-width: 768px){
    height: 100%;
  }
`;

export const FooterSectionPadding = styled.div`
  padding: 4rem 4rem;
`;
export const FooterLinks = styled(LinkS)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  margin-bottom: 2rem;
`;

export const FooterLinksdiv = styled.div`
  width: 150px;
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
`;

export const FooterBelow = styled.div`

margin-right: 200px;
text-decoration: none;
`;

export const FooterBelowLinks = styled.div`
text-decoration: none;
`;

export const FooterCopyright = styled.div`
margin-top: 20px;/* This will push the element to the bottom of its container */

color: #F4D03F;
`;
 export const CustomLink = styled.div`
  color: rgba(175,175,179);
  text-decoration: none;
 `
