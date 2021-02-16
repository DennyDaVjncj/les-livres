import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar=()=>{
    return(
        <NavBar bg='dark' variant='dark'>
            <NavBar.Brand href='/'>Les Livres</NavBar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/'>Search</Nav.Link>
                <Nav.Link href='/collection'>Collection</Nav.Link>
            </Nav>
        </NavBar>
    )
}
export default NavBar;