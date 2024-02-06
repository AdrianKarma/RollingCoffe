import { Container, Image,Button, NavLink } from "react-bootstrap";
import error404 from "../../assets/error404.png";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <Container className="my-4 d-flex flex-column align-items-center  " >
          
          <div className="">
      <Image className=" img-fluid error404" src={error404} alt="Error404"></Image>  
      </div>
      <div className="text-center">
      <Button as={Link} variant="success" to={'/'}> Volver al inicio </Button>
      </div>
        </Container>
    );
};

export default Error404;<p>aqui va el 404</p>