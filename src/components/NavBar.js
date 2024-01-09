import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png'
import SignIn from '../googleSignIn/SignIn';
import { useState } from 'react';
// import { useEffect, useState } from 'react';


const NavBar = () => {
    const [isUserSignIn,setisUserSignIn] = useState(!!localStorage.getItem('userName'));
    const handleLogOut= ()=>{
        localStorage.clear()
        window.location.reload()
        setisUserSignIn(false);
    }
    const loggedIn=()=>{
        return(
            <NavDropdown title={localStorage.getItem('userName')} id="basic-nav-dropdown">
                <NavDropdown.Item href="/user/profile">Profil</NavDropdown.Item>
                <NavDropdown.Item href="/user/recipes">My Recipes</NavDropdown.Item>
                <NavDropdown.Item href="/user/favorite">Saved Recipes</NavDropdown.Item>
                <NavDropdown.Item href="/recipes/create">Create New Recipe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={handleLogOut}>Log Out</NavDropdown.Item>
                </NavDropdown>
        )
    };
   
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>
            <img src={logo} alt='logo' style={{ width: '50px', height: '50px' }}/>
            </Navbar.Brand>
            <Navbar.Brand href="/">Shani's Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"  style={{justifyContent: 'space-between',}}>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/recipes">Recipes</Nav.Link>      
            </Nav>
            
            <Nav>
                {isUserSignIn?
                loggedIn():
                <Nav.Item>
                    <SignIn setisUserSignIn={setisUserSignIn}/>
                </Nav.Item>}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

     )
    
    }
export default NavBar;