import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png'
import SignIn from '../googleSignIn/SignIn';


const NavBar= () => {
    return(
        // <div className='navbar'> 
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
        <Nav.Link href="/recipes/create">Create New Recipe</Nav.Link>         
      </Nav>
      <Nav>
        <Nav.Item><SignIn/></Nav.Item>
      </Nav>
    
      {/* {localStorage.getItem('userName')?
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">
                     Separated link
                   </NavDropdown.Item>
                 </NavDropdown>:
      <Nav>
        <Nav.Item><SignIn/></Nav.Item>
      </Nav>} */}
    </Navbar.Collapse>
  </Container>
</Navbar>
//  </div>
        // <div className='navbar'> 
        // <Navbar expand="lg" className="bg-body-tertiary">
        //   <Container>
        //   <Navbar.Brand><img src={logo} alt='logo' style={{ width: '50px', height: '50px' }}/></Navbar.Brand>
        //     <Navbar.Brand href="/">Shani's Recipes</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //       <Nav className="me-auto">
        //         <Nav.Link href="/">Home</Nav.Link>
        //         <Nav.Link href="/recipes">Recipes</Nav.Link>
        //         <Nav.Link href="/recipes/create">Create New Recipe</Nav.Link>         
        //         <Nav className="ms-auto">
        //         <Nav.Item><SignIn/></Nav.Item>
        //         </Nav>
        //         {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //           <NavDropdown.Item href="#action/3.2">
        //             Another action
        //           </NavDropdown.Item>
        //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //           <NavDropdown.Divider />
        //           <NavDropdown.Item href="#action/3.4">
        //             Separated link
        //           </NavDropdown.Item>
        //         </NavDropdown> */}
        //       </Nav>
        //     </Navbar.Collapse>
        //   </Container>
        // </Navbar></div>
     )
    
    }
export default NavBar;