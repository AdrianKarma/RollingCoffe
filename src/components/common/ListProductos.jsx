import { Container } from "react-bootstrap";
import CardProdcuto from "./CardProdcuto";

const ListProductos = () => {
    return (
        <Container fluid className="my-4 d-flex flex-wrap ">
        <CardProdcuto ></CardProdcuto>
        <CardProdcuto ></CardProdcuto>
        <CardProdcuto ></CardProdcuto>
        <CardProdcuto ></CardProdcuto>
        <CardProdcuto ></CardProdcuto>
        <CardProdcuto ></CardProdcuto>
        <CardProdcuto ></CardProdcuto>
        </Container>
    );
};

export default ListProductos;