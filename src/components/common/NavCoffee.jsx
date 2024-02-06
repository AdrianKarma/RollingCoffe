import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Coffee_Logo.png'
import { Link, NavLink,   } from 'react-router-dom';

const NavCoffee = () => {
    return (
        <>
         <Navbar expand="lg" className=" bg-gray ">
      <Container>
        <Navbar.Brand as={Link} to={'/'}> <img src={logo} alt="" className='img-fluid ' width={200}/></Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link' to={'/'} end>Inicio</NavLink>
            <NavLink className='nav-link' to={'administrador'} end>Administrador</NavLink>
            <NavLink className='nav-link' to={'login'} end>Registro</NavLink>
            <NavLink className='nav-link' to={'registro'} end>Login</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      </>
  
    );
};

export default NavCoffee;