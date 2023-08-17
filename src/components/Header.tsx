import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { RiLoginCircleFill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';


const Header: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Apni Hosting </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto d-flex align-items-center ">
        <NavLink to='/' className='text-white text-decoration-none'>Home</NavLink>
        <NavLink to='/features' className='text-white text-decoration-none  '>Features</NavLink>
        <NavLink to='/about' className='text-white text-decoration-none'>About</NavLink>
        <Nav.Link href="#contact" className='text-white text-decoration-none'>Contact</Nav.Link>
      </Nav> 
    </Navbar.Collapse>
      <Button>
      <RiLoginCircleFill />
      </Button>
  </Navbar>
);

export default Header;
