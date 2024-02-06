import { Container,Table, Button, Image } from "react-bootstrap";
import coffeHeart from '../../assets/coffeHeart.png'


const Administrador = () => {
    return (
        <Container className="mt-5 ">
            <section className="d-flex justify-content-between align-items-center">
            <h1 className="" >Prodcutos disponibles</h1>
<Button><i className="bi bi-file-earmark-plus"></i></Button>
</section>
        <article className="table-responsive">
            <Table striped bordered hover className="mt-4 text text-center">
      <thead>
        <tr>
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="align-middle">1</td>
          <td className="align-middle">Café de la casa</td>
          <td className="align-middle">
            $1300
          </td>
          <td className="align-middle"><Image className="img-fluid imgTabla" src={coffeHeart}></Image></td>
          <td className="align-middle">Babida Caliente</td>
          <td className="align-middle">
            <div className="d-flex justify-content-around">
          <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
            <Button variant="danger"><i className="bi bi-trash"></i></Button>
            </div>
          </td>
        </tr>       
      

      </tbody>
    </Table>

    </article>
        </Container>
    );
};

export default Administrador;