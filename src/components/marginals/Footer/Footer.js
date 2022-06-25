/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import { ImTwitter, ImMail, ImGithub } from 'react-icons/im';
// import { IoLogoSlack } from 'react-icons/io';
// import RocketImg from '../../../assets/rocket.webp';
// import { ImTwitter, ImMail, ImGithub } from 'react-icons/im';
// import { IoLogoSlack } from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

    {/* <Container fluid>
      <Row className='footer-above'>
        <Col xs={12} md={3}>
            <img src={RocketImg} alt='rocket' height={130} width={69} />
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Useful Links</h4>
          <li className='footer-link'>
            <a href='https://github.com/codeisscience' target='_blank' rel='noreferrer'>
              Contribute
            </a>
          </li>
          <li className='footer-link'>
            <a
              href='https://codeisscience.github.io/manifesto/manifesto.html'
              target='_blank'
              rel='noreferrer'
            >
              Manifesto
            </a>
          </li>
          <li className='footer-link'>
            <a href='#'>Code of conduct</a>
          </li>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Resources</h4>
          <li className='footer-link'>
            <a href='#'>Authors</a>
          </li>
          <li className='footer-link'>
            <a href='#'>Open science</a>
          </li>
          <li className='footer-link'>
            <a href='#'>Contributors</a>
          </li>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Contact Us</h4>

          <li className='footer-link'>
            <a href='mailto:contact@codeisscience.com' target='_blank' rel='noreferrer'>
            <ImMail className='email-icon icons'/> Email
            </a>
          </li>
          <li className='footer-link'>
            <a href='https://twitter.com/codeisscience' target='_blank' rel='noreferrer'>
            <ImTwitter className='twitter-icon icons'/>
              &nbsp;Twitter
            </a>
          </li>
          <a href='https://github.com/codeisscience' target='_blank' rel='noreferrer'>
            <ImGithub className='github-icon icons'/> GitHub
          </a>

          <li className='footer-link'>
            <a href='#'>
              <IoLogoSlack className='slack-icon icons'/> Slack
            </a>
          </li>
        </Col>
      </Row>
      <Row className='footer-below'>
        <p></p>
      </Row>
    </Container> */}
    </FooterContainer>
  );
}

export default Footer;
