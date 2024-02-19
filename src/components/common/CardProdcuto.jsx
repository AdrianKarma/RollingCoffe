import { Card, Button } from "react-bootstrap";

const CardProdcuto = ({Producto}) => {
    return (
        <Card className="m-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Producto.imagen} />
        <Card.Body>
          <Card.Title className="text-success">{Producto.nombreProducto}</Card.Title>
          <Card.Text>
            
        Descripción: {Producto.descripcion_amplia}
          </Card.Text>
        
        </Card.Body>
        

<Card.Footer className="text-end">
<Button  variant="success">Ver mas</Button>
</Card.Footer>

      </Card>
    );
};

export default CardProdcuto;