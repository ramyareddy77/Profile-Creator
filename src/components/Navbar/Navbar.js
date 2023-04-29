import {Navbar,Nav,Container  }from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './Navbar.css';
import Register from '../registration/registration';
import Login from '../login/login';
import Logout from '../logout/logout';

function NavScrollExample() {
  return (
    <Router>
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'rgb(182, 135, 135)',height:"200px"}}>
      <Container fluid>
        <Navbar.Brand href="#">
          <h1>Profile Generator</h1> 
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/login' className='nav-item'>Login</Nav.Link>
            <Nav.Link as={Link} to='/register' className='nav-item' >Register</Nav.Link>
            <Nav.Link as={Link} to= '/logout' className='nav-item' >Logout </Nav.Link>
            
            
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    <Routes>
    <Route exact path='/login' element={<Login />}></Route>
    <Route exact path='/register' element={<Register />}></Route>
    <Route exact path='/logout' element={<Logout />}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default NavScrollExample;