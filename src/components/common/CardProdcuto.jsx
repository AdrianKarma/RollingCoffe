import { Card, Button } from "react-bootstrap";
import coffeHeart from '../../assets/coffeHeart.png'
const CardProdcuto = () => {
    return (
        <Card className="m-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={coffeHeart} />
        <Card.Body>
          <Card.Title className="text-success">Café de la casa</Card.Title>
          <Card.Text>
            
        Descripción: Café colombiano con sabor suave, aroma envolvente y cuerpo sedoso.
            Precio $1300
          </Card.Text>
        
        </Card.Body>
        

<Card.Footer className="text-end">
<Button  variant="success">Ver mas</Button>
</Card.Footer>

      </Card>
    );
};

export default CardProdcuto;