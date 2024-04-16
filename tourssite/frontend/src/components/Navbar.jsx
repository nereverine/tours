import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "@mui/material/Button";
import '../styles/navbar.css'
function NavBar(){



    return(   
        <Navbar className='Navbar' style={{borderBottomColor:"black", borderStyle:"solid", borderBottomWidth:1}}>
        <Navbar.Brand href="/">
            <img  src='./images/logo.png' width="75" height="75" className="d-inline-block align-top mr-4" alt="Tours logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='px-5'>
            <Nav.Link className="inactive" style={{ display: "flex", alignItems: "center", justifyContent:"center", width:120, height:70, borderWidth:1}} href="#mytours">My Tours</Nav.Link>
            <Nav.Link className='inactive' style={{ display: "flex", alignItems: "center", justifyContent:"center", width:120, height:70, borderWidth:1 }} href="#cites">Cities</Nav.Link>
            <Nav.Link className='inactive' style={{ display: "flex", alignItems: "center", justifyContent:"center", width:120, height:70, borderWidth:1 }} href="#pois">Points of Interest</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
    
    </Navbar>
        
    )
}

export default NavBar;