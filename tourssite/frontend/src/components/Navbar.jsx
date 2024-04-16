import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "@mui/material/Button";
import '../styles/navbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { jwtDecode} from "jwt-decode"

function NavBar(){
  const token = localStorage.getItem('access_token')
  const fullName = jwtDecode(token).first_name + " " + jwtDecode(token).last_name


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
          <NavDropdown className='mx-4'style={{right:100}} title={<AccountCircleIcon style={{transform:"scale(3)"}}></AccountCircleIcon>}>
            <Navbar.Text>
              Welcome, {fullName}
            </Navbar.Text>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/logout'>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
    
    </Navbar>
        
    )
}

export default NavBar;