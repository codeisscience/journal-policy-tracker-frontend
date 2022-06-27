/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, Logo, Menu, MenuLink, Button, Items } from './styles';
import { navbar } from  '../../../config/content';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo src={navbar.logo.src}/>
            <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 
                 <FontAwesomeIcon icon = {navbar.icon2}/> :
                 <FontAwesomeIcon icon={ navbar.icon } /> } 
            </Button>
            <Menu isOpen={isOpen}>
                {navbar.navItems.map(({ id, name, link }) => (
                    <Link 
                     onClick={() => setIsOpen(!isOpen)}  
                     key={id} 
                     to={link}>
                        <Items>
                            {name}
                        </Items>
                    </Link>
                ))}
                {/* <Link to='/'><Items>Home</Items></Link>
                <Link to='/manifesto'><Items>Manifesto</Items></Link>
                <Link to='/journal'><Items>Journal</Items></Link>
                <Link to='/contact'><Items>Contact</Items></Link>
                <Link to='/login'><Items>Login</Items></Link>
                <Link to='/signup'><Items>SignUp</Items></Link> */}
            </Menu>
        </Nav>
    );
};

export default Navbar