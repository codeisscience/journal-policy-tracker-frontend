/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Logo, Menu, MenuLink, Button, Items } from './styles';
import { navbar } from '../../../config/content';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo src={navbar.logo.src} />
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FontAwesomeIcon icon={navbar.icon2} /> : <FontAwesomeIcon icon={navbar.icon} />}
      </Button>
      <Menu isOpen={isOpen}>
        {navbar.navItems.map(({ id, name, link }) => (
          <Link onClick={() => setIsOpen(!isOpen)} key={id} to={link}>
            {name ? <Items>{name}</Items> : <div />}
          </Link>
        ))}
      </Menu>
    </Nav>
  );
}

export default Navbar;
