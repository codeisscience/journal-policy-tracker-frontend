import React, { useState } from 'react';

// Libraries
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assets
import { navbar } from '../../../config/content';

// Styles
import { Nav, Logo, Menu, Button, Items } from './styles';

// import { useGlobalContext } from '../../../context/DataContext';

function Navbar() {
  // const { search, setSearch } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Link to='/'>
        <Logo src={navbar.logo.src} />
      </Link>

      {/* <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input
          id='search'
          type='text' 
          placeholder='Search Journal'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form> */}
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
