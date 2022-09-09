/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assets
import { footer } from '../../../config/content';

// Styles
import {
  FooterContainer,
  SecondaryContainer,
  UpperDiv,
  Logo,
  LinksContainer,
  Heading2,
  Heading3,
  NoStyleNav,
  SocialDiv,
  LowerDiv,
} from './styles';

function Footer() {
  return (
    <FooterContainer>
      <SecondaryContainer>
        <UpperDiv>
          <LinksContainer>
            <Logo src={footer.img.src} alt={footer.img.alt} />
          </LinksContainer>

          <LinksContainer>
            <Heading2>{footer.col1.head}</Heading2>
            {footer.col1.links.map(({ id, sub, link }) => (
              <NoStyleNav key={id} href={link} target='_blank' rel='noreferrer'>
                <Heading3>{sub}</Heading3>
              </NoStyleNav>
            ))}
          </LinksContainer>

          <LinksContainer>
            <Heading2>{footer.col2.head}</Heading2>
            {footer.col2.links.map(({ id, sub, link }) => (
              <NoStyleNav key={id} href={link} target='_blank' rel='noreferrer'>
                <Heading3>{sub}</Heading3>
              </NoStyleNav>
            ))}
          </LinksContainer>

          <LinksContainer>
            <Heading2>{footer.socials.head}</Heading2>
            <div style={{ display: 'flex', gap: '10px' }}>
              {footer.socials.links.map(({ id, icon, link }) => (
                <a key={id} href={link} target='_blank' rel='noreferrer'>
                  <SocialDiv key={id}>
                    <FontAwesomeIcon icon={icon} color='#898989' size='xl' />
                  </SocialDiv>
                </a>
              ))}
            </div>
          </LinksContainer>
        </UpperDiv>
      </SecondaryContainer>
      <LowerDiv>Copyright © {new Date().getFullYear()} Code is Science</LowerDiv>
    </FooterContainer>
  );
}

export default Footer;
