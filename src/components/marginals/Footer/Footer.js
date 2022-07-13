/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterContainer, SecondaryContainer, UpperDiv, Logo, LinksContainer, Heading2, Heading3, NoStyleNav, SocialDiv, LowerDiv } from './styles';
import { footer } from '../../../config/content';


function Footer() {
  return (
    <FooterContainer>
      <SecondaryContainer>

        <UpperDiv>
          <Logo src={footer.img.src} alt={footer.img.alt} />

          <LinksContainer>
          <Heading2>
            {footer.col1.head}
          </Heading2>
          {footer.col1.links.map(({ id, sub, link }) => (
            <NoStyleNav key={id} href={link} target='_blank' rel='noreferrer'>
              <Heading3>{sub}</Heading3>
            </NoStyleNav>
          ))}
          </LinksContainer>

          <LinksContainer>
          <Heading2>
            {footer.col2.head}
          </Heading2>
          {footer.col2.links.map(({ id, sub, link }) => (
            <NoStyleNav key={id} href={link} target='_blank' rel='noreferrer'>
              <Heading3>{sub}</Heading3>
            </NoStyleNav>
          ))}
          </LinksContainer>

          <LinksContainer>
          <Heading2>
            {footer.socials.head}
          </Heading2>
          {footer.socials.links.map(({ id, icon, head, link, color }) => (
             <a key={id} href={link} target='_blank' rel='noreferrer'>
              <SocialDiv key={id} >
                <FontAwesomeIcon icon={icon} color={color} />
                <Heading3>{head}</Heading3>
              </SocialDiv>
             </a>
          ))}
          </LinksContainer>
          
        </UpperDiv>

        

      </SecondaryContainer>
      <LowerDiv>
      Copyright © {new Date().getFullYear()} Code is Science
      </LowerDiv>
    </FooterContainer>
  );
}

export default Footer;