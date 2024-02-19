import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import coffeHeart from "../../assets/coffeHeart.png";
import { Container } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <>
      <Container className="my-5">
        <Card className="d-flex flex-row align-items-center" style={{ width: '58rem' }}>
          <div className="me-2">
            <Card.Img className="detalleCard" src={coffeHeart} />
          </div>
          <div>
            <Card.Header>
              <Card.Title>Café Colombiano</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Descubre la esencia de Colombia en cada taza de nuestro café
                colombiano. Con su cuerpo suave y sabores intensos, este café te
                cautivará con sus notas aterciopeladas y aroma embriagador.
                Proveniente de las tierras fértiles de Colombia, cada sorbo te
                transportará a las majestuosas montañas donde se cultiva con
                dedicación y pasión. Disfruta de una experiencia única y
                auténtica que solo nuestro café colombiano puede ofrecerte.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="">
                <div className="d-flex " >
            <p className="text-success fw-bold me-1">Categoria:</p> <p >Infusiones</p>
            </div>
            <div className="d-flex">
            <p className="text-success fw-bold me-1">Precio:</p> <p className="text-success fw-bold ">$</p><p className="text-success fw-bold ">1000</p>
            </div>
            </Card.Footer>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default DetalleProducto;
