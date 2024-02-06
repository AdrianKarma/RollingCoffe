import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Coffee_Logo.png'

const NavCoffee = () => {
    return (
        <>
         <Navbar expand="lg" className=" bg-gray ">
      <Container>
        <Navbar.Brand href="#home" > <img src={logo} alt="" className='img-fluid ' width={200}/></Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Administrador</Nav.Link>
            <Nav.Link href="#home">Registro</Nav.Link>
            <Nav.Link href="#home">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      </>
  
    );
};

export default NavCoffee;