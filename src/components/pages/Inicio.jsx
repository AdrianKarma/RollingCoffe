import { Container, Image, Card, Button } from "react-bootstrap";
import banner from '../../assets/banner.jpg'
import ListProductos from "../common/ListProductos";

const Inicio = () => {
    return (
        < >
      <Image className='img-fluid banner'  src={banner} alt="banner" />
            <h1 className="mt-4 ms-5">Nuestros Productos</h1>
        
     <ListProductos></ListProductos>

        </>
    );
};

export default Inicio;