import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormularioProducto = () => {
  return (
    <>
      <Container className="my-4">
        <h1>Nuevo Producto</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="Producto.form">
            <Form.Label>Producto*</Form.Label>
            <Form.Control type="text" placeholder="Ej: café" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Precio.form">
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="text" placeholder="ej: 1300" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="URL.form">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control type="text" placeholder="https://www.google.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Categoria.form">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select type="text" aria-label="Elige una Categoria">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              
            </Form.Select>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="breve.form">
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amplia.form">
            <Form.Label>Descripción amplia*</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="success">Guardar</Button>
        </Form>
      </Container>
    </>
  );
};

export default FormularioProducto;
