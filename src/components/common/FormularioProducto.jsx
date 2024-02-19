import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form"


const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const productoValidado = (producto) => {
    console.log(producto);
  };

  return (
    <>
      <Container className="my-4">
        <h1>Nuevo Producto</h1>
        <hr />
        <Form onSubmit={handleSubmit(productoValidado)}>
          <Form.Group className="mb-3" controlId="Producto.form">
            <Form.Label>Producto*</Form.Label>
            <Form.Control type="text" placeholder="Ej: café" {
                ...register("nombreProducto", {
                    required:"El nombre del producto es obligatorio",
                     minLenght:{
                    value:2,
                    message:"debe ingresar como minimo 2 caracteres para el nombre del producto"
                }, 
                    maxLength:{
                    value:50,
                     message:"debe ingresar como maximo 50 caracteres para el nombre del producto"
                }})
            } />
            <Form.Text className="text-danger">{errors.nombreProducto?.message} </Form.Text>
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
