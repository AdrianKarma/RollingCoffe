import { Container,Table, Button, Image } from "react-bootstrap";
import coffeHeart from '../../assets/coffeHeart.png'

import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import ItemProducto from "./ItemProducto";




const Administrador = () => {

  const [productos, setProductos] = useState([]);

  useEffect( ()=>{
    traerProductos();

  },[] )

const traerProductos = async()=>{
try{
 const listaProductosAPI = await leerProductosAPI();
 setProductos(listaProductosAPI);

}
catch(error){
  console.log(error)
}

}


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
        {
   productos.map((Producto)=> <ItemProducto key={Producto.id} Producto={Producto}></ItemProducto>)
        }
     
      

      </tbody>
    </Table>

    </article>
        </Container>
    );
};

export default Administrador;