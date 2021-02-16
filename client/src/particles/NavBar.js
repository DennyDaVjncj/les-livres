import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar=()=>{
    return(
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/'>Les Livres</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/'>Search</Nav.Link>
                <Nav.Link href='/collection'>Collection</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default NavBar;