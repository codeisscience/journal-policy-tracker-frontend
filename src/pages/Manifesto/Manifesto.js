/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/order */
import React from 'react';
import './Manifesto.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import StandingImg from '../../assets/human-2.webp';
import SittingImg from '../../assets/human-1.webp';
import ImgOne from '../../assets/manifesto-img-1.webp';
import WalkingImg from '../../assets/walking-man.webp';
import PeersImg from '../../assets/peers.webp';
import HandsIcon from '../../assets/hands-icon.webp';
import { ImTwitter, ImMail, ImGithub } from 'react-icons/im';

const Manifesto = () => (
  <Container>
    <Row className='manifesto-header manifesto-padding'>
      <Col xs={12} sm={12} md={3} className='imgContainer'>
        <Image src={StandingImg} height={220} alt= 'animated standing and talking girl' />
      </Col>
      <Col xs={12} sm={12} md={6} className='manifesto'>
        <h1>Manifesto</h1>
      </Col>
      <Col md={3} className='imgContainer'>
        <Image src={SittingImg} height={220} alt='animated sitting and talking girl' />
      </Col>
    </Row>
    <Row className='manifesto-section-one'>
      <Col xs={12} sm={12} md={6}>
        <Image src={ImgOne} alt='research' fluid />
        <p>Code is Science - a manifesto for anyone who deals with code in a scientific scenario</p>
      </Col>
      <Col md={6}>
        <h1>Code is Science Manifesto</h1>
        <p className='manifesto-text'>
          Through working with scientific code, we agree that scientific code needs to be treated as
          a genuine research output. For this reason we have created a{' '}
          <a
            href='https://codeisscience.github.io/manifesto/manifesto.html'
            target='_blank'
            rel='noreferrer'
          >
            manifesto
          </a>
          , which will allow both individuals and organisations to sign up and agree to make genuine
          efforts to both make their own scientific code open, as well as sharing the manifesto
          mission with others.
        </p>
      </Col>
    </Row>
    <Row className='manifesto-support'>
      <h1>I want to express my support for the manifesto! Tell me how</h1>
      <Col md={3} className="manifesto-support-points">
        <Image src={WalkingImg} height={140} alt='walking man' />
        <p>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSeaDLDaREkUyOwpvbQf41hxT12ixoBToTdBhlgTj_YoW0tSgw/viewform?usp=sf_link'
            target='_blank'
            rel='noreferrer'
          >
            Sign the manifesto as an individual
          </a>
        </p>
      </Col>
      <Col md={3} className="manifesto-support-points">
        <Image src={PeersImg} height={140} alt='animated talking boys'/>
        <p>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSdUPKlP__5saaYMyEJwkHF3gRNAHiKihOlp6zd6QK4vUqs3gg/viewform?usp=sf_link'
            target='_blank'
            rel='noreferrer'
          >
            Sign the manifesto as an organisation or institution.
          </a>
          Please make sure you have authority to sign on behalf of your organisation before you sign
          on behalf of an organisation.
        </p>
      </Col>
      <Col md={3} className="manifesto-support-points">
        <img src={HandsIcon} alt='hands icon' height={140} />
        <p>
          We’re particularly interested in adding logos and links indicating organisational support
          from publishers, funders, and research institutions.
        </p>
      </Col>
    </Row>
    <Row className='manifesto-contribute'>
      <Col md={5}>
        <h2>How can I contribute?</h2>
        <ul>
          <li>Sign the manifesto and share with all your friends!</li>
          <li>Add links to your personal and institutional sites.</li>
          <li>
            You can also look at the{' '}
            <a
              href='https://github.com/codeisscience/manifesto/issues/'
              target='_blank'
              rel='noreferrer'
            >
              issues
            </a>{' '}
            on GitHub and see if there’s anything else you can pick up. You can also look at our{' '}
            <a
              href='https://codeisscience.github.io/manifesto/roadmap.html'
              target='_blank'
              rel='noreferrer'
            >
              roadmap
            </a>{' '}
            to get an understanding of our timeline.
          </li>
        </ul>
      </Col>
      <Col md={5} className='manifesto-contact'>
        <h2>Contact</h2>
        <a href='https://twitter.com/codeisscience'>
          <ImTwitter />
          &nbsp;Twitter: @codeisscience
        </a>
        <a href='mailto:contact@codeisscience.com'>
          <ImMail /> Email: contact@codeisscience.com
        </a>
        <a href='https://github.com/codeisscience'>
          <ImGithub /> GitHub: You can also create issues on the manifesto repository
        </a>
      </Col>
    </Row>
  </Container>
);
export default Manifesto;
